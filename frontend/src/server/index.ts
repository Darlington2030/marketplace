import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { v4 as uuidv4 } from 'uuid';
import { createHash } from 'crypto';

const __filename = fileURLToPath(import.meta.url);
const __dirname  = dirname(__filename);
const rootDir    = join(__dirname, '../..');
const dataDir    = join(__dirname, '../../../backend/data');

const app  = express();
const PORT = parseInt(process.env.PORT || '4000');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Static assets
app.use('/dist',   express.static(join(rootDir, 'public/dist')));
app.use('/public', express.static(join(rootDir, 'public')));

// View engine
app.set('view engine', 'ejs');
app.set('views', join(rootDir, 'views'));

// ─── Data helpers ────────────────────────────────────────
if (!existsSync(dataDir)) mkdirSync(dataDir, { recursive: true });

const path = (f: string) => join(dataDir, f);
const read  = <T>(f: string): T => JSON.parse(readFileSync(path(f), 'utf8'));
const write = (f: string, d: unknown) => writeFileSync(path(f), JSON.stringify(d, null, 2));
const hash  = (p: string) => createHash('sha256').update(p).digest('hex');

// Seed data on first run
const seedFile = (filename: string, data: unknown) => {
  if (!existsSync(path(filename))) write(filename, data);
};

seedFile('users.json', [
  { id: 'user1', name: 'ComicCollector', password: hash('123456'), createdAt: new Date().toISOString() },
  { id: 'user2', name: 'ToyTrader',      password: hash('123456'), createdAt: new Date().toISOString() },
  { id: 'user3', name: 'CardMaster',     password: hash('123456'), createdAt: new Date().toISOString() },
]);

seedFile('items.json', [
  { id: '1', name: 'Vintage Comic Book — Spider-Man #1',       description: 'Rare collectible in mint condition, CGC graded 9.8. First solo series.',           price: 500,  image: 'https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=600',  sellerId: 'user1', sellerName: 'ComicCollector', status: 'active', highestOffer: null,  highestOfferBuyer: null, createdAt: new Date().toISOString() },
  { id: '2', name: 'Limited Edition Funko Pop — Batman',       description: 'Convention exclusive, still in original box with holographic sticker.',              price: 150,  image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=600',  sellerId: 'user2', sellerName: 'ToyTrader',      status: 'active', highestOffer: 120,   highestOfferBuyer: 'user3', createdAt: new Date().toISOString() },
  { id: '3', name: 'Pokémon Card — Charizard 1st Edition',     description: 'PSA graded 9. First edition base set — one of the most iconic cards ever printed.', price: 1200, image: 'https://images.unsplash.com/photo-1621274403997-37aace184f49?w=600',  sellerId: 'user3', sellerName: 'CardMaster',     status: 'active', highestOffer: null,  highestOfferBuyer: null, createdAt: new Date().toISOString() },
  { id: '4', name: 'Star Wars — Darth Vader 1977 Original',    description: 'Original 1977 Kenner release, sealed in original packaging.',                       price: 850,  image: 'https://images.unsplash.com/photo-1608889476561-6242cfdbf4f2?w=600',  sellerId: 'user1', sellerName: 'ComicCollector', status: 'active', highestOffer: null,  highestOfferBuyer: null, createdAt: new Date().toISOString() },
  { id: '5', name: 'Magic: The Gathering — Black Lotus Alpha', description: 'Alpha edition, near mint, professionally authenticated.',                            price: 3000, image: 'https://images.unsplash.com/photo-1616901826816-7045fc2e8a8d?w=600',  sellerId: 'user2', sellerName: 'ToyTrader',      status: 'active', highestOffer: 2700, highestOfferBuyer: 'user1', createdAt: new Date().toISOString() },
  { id: '6', name: 'Vintage LEGO Space — Galaxy Explorer 497', description: 'Complete 1979 set, all original pieces and instructions included.',                  price: 320,  image: 'https://images.unsplash.com/photo-1581235725079-7c7783e6a2df?w=600',  sellerId: 'user3', sellerName: 'CardMaster',     status: 'active', highestOffer: null,  highestOfferBuyer: null, createdAt: new Date().toISOString() },
]);

seedFile('messages.json', [
  { id: 'msg1', itemId: '1', senderId: 'user2', senderName: 'ToyTrader',      content: 'Is this still available?',    type: 'text',  price: null, originalPrice: null, status: null,      timestamp: new Date(Date.now()-86400000).toISOString(), readBy: ['user2'] },
  { id: 'msg2', itemId: '1', senderId: 'user1', senderName: 'ComicCollector', content: 'Yes, CGC 9.8 mint condition!', type: 'text',  price: null, originalPrice: null, status: null,      timestamp: new Date(Date.now()-86000000).toISOString(), readBy: ['user1'] },
  { id: 'msg3', itemId: '1', senderId: 'user2', senderName: 'ToyTrader',      content: 'Offer: $450',                 type: 'offer', price: 450,  originalPrice: 500,  status: 'pending', timestamp: new Date(Date.now()-85000000).toISOString(), readBy: ['user2'] },
]);

// ─── API Routes ──────────────────────────────────────────

// Health
app.get('/api/health', (_req, res) => res.json({ status: 'OK', timestamp: new Date().toISOString() }));

// ── Users ──
app.post('/api/users/login', (req, res) => {
  try {
    const { name, password } = req.body;
    if (!name?.trim()) return res.status(400).json({ error: 'Username is required' });
    if (!password?.trim()) return res.status(400).json({ error: 'Password is required' });
    const users: any[] = read('users.json');
    const hashed = hash(password);
    let user = users.find(u => u.name.toLowerCase() === name.trim().toLowerCase());
    if (!user) {
      // Auto-register
      user = { id: uuidv4(), name: name.trim(), password: hashed, createdAt: new Date().toISOString(), lastLogin: new Date().toISOString() };
      users.push(user); write('users.json', users);
      const { password: _, ...safe } = user;
      return res.json({ ...safe, isNewUser: true });
    }
    if (user.password !== hashed) return res.status(401).json({ error: 'Incorrect password' });
    user.lastLogin = new Date().toISOString();
    write('users.json', users);
    const { password: _, ...safe } = user;
    res.json({ ...safe, isNewUser: false });
  } catch (e) { res.status(500).json({ error: 'Login failed' }); }
});

app.post('/api/users/register', (req, res) => {
  try {
    const { name, password } = req.body;
    if (!name?.trim()) return res.status(400).json({ error: 'Username is required' });
    if (!password || password.length < 3) return res.status(400).json({ error: 'Password must be at least 3 characters' });
    const users: any[] = read('users.json');
    if (users.find(u => u.name.toLowerCase() === name.trim().toLowerCase()))
      return res.status(409).json({ error: 'Username already taken' });
    const user = { id: uuidv4(), name: name.trim(), password: hash(password), createdAt: new Date().toISOString(), lastLogin: new Date().toISOString() };
    users.push(user); write('users.json', users);
    const { password: _, ...safe } = user;
    res.status(201).json(safe);
  } catch (e) { res.status(500).json({ error: 'Registration failed' }); }
});

app.get('/api/users', (_req, res) => {
  try {
    const users: any[] = read('users.json');
    res.json(users.map(({ password: _, ...u }) => u));
  } catch (e) { res.status(500).json({ error: 'Failed' }); }
});

app.get('/api/users/:id', (req, res) => {
  try {
    const users: any[] = read('users.json');
    const user = users.find(u => u.id === req.params.id);
    if (!user) return res.status(404).json({ error: 'User not found' });
    const { password: _, ...safe } = user;
    res.json(safe);
  } catch (e) { res.status(500).json({ error: 'Failed' }); }
});

// ── Items ──
app.get('/api/items', (req, res) => {
  try {
    let items: any[] = read('items.json');
    items = items.filter(i => i.status === 'active');
    const { search } = req.query as { search?: string };
    if (search?.trim()) {
      const q = search.toLowerCase();
      items = items.filter(i => i.name.toLowerCase().includes(q) || i.description.toLowerCase().includes(q));
    }
    items.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    res.json(items);
  } catch (e) { res.status(500).json({ error: 'Failed to fetch items' }); }
});

app.get('/api/items/:id', (req, res) => {
  try {
    const items: any[] = read('items.json');
    const item = items.find(i => i.id === req.params.id);
    if (!item) return res.status(404).json({ error: 'Item not found' });
    res.json(item);
  } catch (e) { res.status(500).json({ error: 'Failed' }); }
});

app.post('/api/items', (req, res) => {
  try {
    const items: any[] = read('items.json');
    const { name, description, price, image, sellerId, sellerName } = req.body;
    if (!name || !price || !sellerId) return res.status(400).json({ error: 'name, price, sellerId required' });
    const item = { id: uuidv4(), name, description: description || '', price: parseFloat(price), image: image || 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600', sellerId, sellerName: sellerName || 'Anonymous', status: 'active', highestOffer: null, highestOfferBuyer: null, createdAt: new Date().toISOString() };
    items.push(item); write('items.json', items);
    res.status(201).json(item);
  } catch (e) { res.status(500).json({ error: 'Failed to create item' }); }
});

app.put('/api/items/:id', (req, res) => {
  try {
    const items: any[] = read('items.json');
    const idx = items.findIndex(i => i.id === req.params.id);
    if (idx === -1) return res.status(404).json({ error: 'Not found' });
    items[idx] = { ...items[idx], ...req.body }; write('items.json', items);
    res.json(items[idx]);
  } catch (e) { res.status(500).json({ error: 'Failed' }); }
});

app.delete('/api/items/:id', (req, res) => {
  try {
    const items: any[] = read('items.json');
    write('items.json', items.filter(i => i.id !== req.params.id));
    res.status(204).send();
  } catch (e) { res.status(500).json({ error: 'Failed' }); }
});

app.post('/api/items/:id/checkout', (req, res) => {
  try {
    const items: any[] = read('items.json');
    const idx = items.findIndex(i => i.id === req.params.id);
    if (idx === -1) return res.status(404).json({ error: 'Not found' });
    items[idx] = { ...items[idx], paymentStatus: 'paid', paymentConfirmedBy: req.body.buyerId, paymentConfirmedAt: new Date().toISOString() };
    write('items.json', items);
    res.json({ success: true, item: items[idx] });
  } catch (e) { res.status(500).json({ error: 'Failed' }); }
});

app.post('/api/items/:id/confirm-sale', (req, res) => {
  try {
    const items: any[] = read('items.json');
    const idx = items.findIndex(i => i.id === req.params.id);
    if (idx === -1) return res.status(404).json({ error: 'Not found' });
    const [sold] = items.splice(idx, 1); write('items.json', items);
    res.json({ success: true, item: sold });
  } catch (e) { res.status(500).json({ error: 'Failed' }); }
});

// ── Messages ──
app.get('/api/messages/item/:itemId', (req, res) => {
  try {
    const msgs: any[] = read('messages.json');
    res.json(msgs.filter(m => m.itemId === req.params.itemId).sort((a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()));
  } catch (e) { res.status(500).json({ error: 'Failed' }); }
});

app.post('/api/messages', (req, res) => {
  try {
    const msgs: any[] = read('messages.json');
    const { itemId, senderId, senderName, content, type, price, originalPrice } = req.body;
    if (!itemId || !senderId || !content) return res.status(400).json({ error: 'itemId, senderId, content required' });
    const msg = { id: uuidv4(), itemId, senderId, senderName: senderName || 'Anonymous', content, type: type || 'text', price: price ? parseFloat(price) : null, originalPrice: originalPrice ? parseFloat(originalPrice) : null, status: type === 'offer' ? 'pending' : null, timestamp: new Date().toISOString(), readBy: [senderId] };
    msgs.push(msg); write('messages.json', msgs);
    res.status(201).json(msg);
  } catch (e) { res.status(500).json({ error: 'Failed' }); }
});

app.put('/api/messages/:id/offer-response', (req, res) => {
  try {
    const msgs: any[] = read('messages.json');
    const idx = msgs.findIndex(m => m.id === req.params.id);
    if (idx === -1) return res.status(404).json({ error: 'Not found' });
    const { status } = req.body;
    if (!['accepted','rejected'].includes(status)) return res.status(400).json({ error: 'Invalid status' });
    msgs[idx].status = status; write('messages.json', msgs);
    res.json(msgs[idx]);
  } catch (e) { res.status(500).json({ error: 'Failed' }); }
});

app.get('/api/messages/item/:itemId/poll/:timestamp', (req, res) => {
  try {
    const msgs: any[] = read('messages.json');
    const since = new Date(decodeURIComponent(req.params.timestamp));
    if (isNaN(since.getTime())) return res.status(400).json({ error: 'Invalid timestamp' });
    const newMsgs = msgs.filter(m => m.itemId === req.params.itemId && new Date(m.timestamp) > since).sort((a,b) => new Date(a.timestamp).getTime()-new Date(b.timestamp).getTime());
    res.json({ messages: newMsgs, lastTimestamp: newMsgs.length ? newMsgs[newMsgs.length-1].timestamp : req.params.timestamp, hasNew: newMsgs.length > 0, pollAgainAfter: 2000 });
  } catch (e) { res.status(500).json({ error: 'Failed' }); }
});

app.get('/api/messages/unread/:userId', (req, res) => {
  try {
    const msgs: any[] = read('messages.json');
    const unread = msgs.filter(m => m.senderId !== req.params.userId && !m.readBy?.includes(req.params.userId));
    const byItem: Record<string,number> = {};
    unread.forEach(m => { byItem[m.itemId] = (byItem[m.itemId]||0)+1; });
    res.json({ total: unread.length, byItem });
  } catch (e) { res.status(500).json({ error: 'Failed' }); }
});

app.post('/api/messages/read', (req, res) => {
  try {
    const msgs: any[] = read('messages.json');
    const { userId, itemId } = req.body;
    msgs.forEach(m => { if (m.itemId === itemId && m.senderId !== userId) { if (!m.readBy) m.readBy=[]; if (!m.readBy.includes(userId)) m.readBy.push(userId); } });
    write('messages.json', msgs); res.json({ success: true });
  } catch (e) { res.status(500).json({ error: 'Failed' }); }
});

app.delete('/api/messages/:id', (req, res) => {
  try {
    const msgs: any[] = read('messages.json');
    write('messages.json', msgs.filter(m => m.id !== req.params.id)); res.status(204).send();
  } catch (e) { res.status(500).json({ error: 'Failed' }); }
});

// ─── Page route ──────────────────────────────────────────
app.get('/', (_req, res) => {
  res.render('index', {
    title: 'CollectMarket — Rare Finds, Fair Deals',
    apiBase: '/api',
    components: ['auth-modal','search-bar','item-grid','list-item-modal','chat-panel','item-detail-modal','toast-notification'],
  });
});

// ─── Start ───────────────────────────────────────────────
const server = app.listen(PORT, () => {
  console.log(`\n✅  CollectMarket running at http://localhost:${PORT}`);
  console.log(`    All API routes embedded — no separate backend needed\n`);
});

server.on('error', (err: any) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`\n❌  Port ${PORT} is busy. Try: PORT=4001 npm start\n`);
    process.exit(1);
  }
});
