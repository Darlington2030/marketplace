import express from 'express';
import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { v4 as uuidv4 } from 'uuid';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const router = express.Router();
const messagesPath = join(__dirname, '../data/messages.json');

const readMessages = () => JSON.parse(readFileSync(messagesPath));
const writeMessages = (messages) => writeFileSync(messagesPath, JSON.stringify(messages, null, 2));

// Get all messages for an item
router.get('/item/:itemId', (req, res) => {
  try {
    const messages = readMessages();
    const itemMessages = messages.filter(m => m.itemId === req.params.itemId)
      .sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));
    res.json(itemMessages);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch messages' });
  }
});

// Send a new message
router.post('/', (req, res) => {
  try {
    const messages = readMessages();
    const { itemId, senderId, senderName, content, type, price, originalPrice } = req.body;
    if (!itemId || !senderId || !content) return res.status(400).json({ error: 'itemId, senderId, and content are required' });
    const newMessage = {
      id: uuidv4(), itemId, senderId,
      senderName: senderName || 'Anonymous', content,
      type: type || 'text',
      price: price ? parseFloat(price) : null,
      originalPrice: originalPrice ? parseFloat(originalPrice) : null,
      status: type === 'offer' ? 'pending' : null,
      timestamp: new Date().toISOString(),
      readBy: [senderId]
    };
    messages.push(newMessage);
    writeMessages(messages);
    res.status(201).json(newMessage);
  } catch (error) {
    res.status(500).json({ error: 'Failed to send message' });
  }
});

// Respond to offer (accept/reject)
router.put('/:id/offer-response', (req, res) => {
  try {
    const messages = readMessages();
    const index = messages.findIndex(m => m.id === req.params.id);
    if (index === -1) return res.status(404).json({ error: 'Message not found' });
    const { status } = req.body;
    if (!['accepted', 'rejected'].includes(status)) return res.status(400).json({ error: 'Invalid status' });
    messages[index].status = status;
    writeMessages(messages);
    res.json(messages[index]);
  } catch (error) {
    res.status(500).json({ error: 'Failed to respond to offer' });
  }
});

// Poll for new messages after timestamp
router.get('/item/:itemId/poll/:timestamp', (req, res) => {
  try {
    const messages = readMessages();
    const since = new Date(req.params.timestamp);
    if (isNaN(since.getTime())) return res.status(400).json({ error: 'Invalid timestamp' });
    const newMessages = messages.filter(m => m.itemId === req.params.itemId && new Date(m.timestamp) > since)
      .sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));
    res.json({
      messages: newMessages,
      lastTimestamp: newMessages.length > 0 ? newMessages[newMessages.length - 1].timestamp : req.params.timestamp,
      hasNew: newMessages.length > 0,
      pollAgainAfter: 2000
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to poll messages' });
  }
});

// Get unread count
router.get('/unread/:userId', (req, res) => {
  try {
    const messages = readMessages();
    const userId = req.params.userId;
    const unreadMessages = messages.filter(m => m.senderId !== userId && !m.readBy?.includes(userId));
    const unreadByItem = {};
    unreadMessages.forEach(msg => { unreadByItem[msg.itemId] = (unreadByItem[msg.itemId] || 0) + 1; });
    res.json({ total: unreadMessages.length, byItem: unreadByItem });
  } catch (error) {
    res.status(500).json({ error: 'Failed to get unread count' });
  }
});

// Mark messages as read
router.post('/read', (req, res) => {
  try {
    const { userId, itemId } = req.body;
    const messages = readMessages();
    messages.forEach(msg => {
      if (msg.itemId === itemId && msg.senderId !== userId) {
        if (!msg.readBy) msg.readBy = [];
        if (!msg.readBy.includes(userId)) msg.readBy.push(userId);
      }
    });
    writeMessages(messages);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Failed to mark messages as read' });
  }
});

router.delete('/:id', (req, res) => {
  try {
    const messages = readMessages();
    writeMessages(messages.filter(m => m.id !== req.params.id));
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete message' });
  }
});

export default router;
