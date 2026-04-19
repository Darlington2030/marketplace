import express from 'express';
import cors from 'cors';
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import itemsRouter from './routes/items.js';
import usersRouter from './routes/users.js';
import messagesRouter from './routes/messages.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const dataDir = join(__dirname, 'data');
if (!existsSync(dataDir)) mkdirSync(dataDir, { recursive: true });

const initData = () => {
  const itemsPath = join(dataDir, 'items.json');
  if (!existsSync(itemsPath)) {
    writeFileSync(itemsPath, JSON.stringify([
      { id: '1', name: 'Vintage Comic Book — Spider-Man #1', description: 'Rare collectible in mint condition, CGC graded 9.8. First solo series.', price: 500, image: 'https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=600', sellerId: 'user1', sellerName: 'ComicCollector', status: 'active', highestOffer: null, highestOfferBuyer: null, createdAt: new Date().toISOString() },
      { id: '2', name: 'Limited Edition Funko Pop — Batman', description: 'Convention exclusive, still in original box with holographic sticker. Only 500 made.', price: 150, image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=600', sellerId: 'user2', sellerName: 'ToyTrader', status: 'active', highestOffer: 120, highestOfferBuyer: 'user3', createdAt: new Date().toISOString() },
      { id: '3', name: 'Pokémon Card — Charizard 1st Edition Holo', description: 'First edition base set Charizard, PSA graded 9. One of the most iconic cards ever.', price: 1200, image: 'https://images.unsplash.com/photo-1621274403997-37aace184f49?w=600', sellerId: 'user3', sellerName: 'CardMaster', status: 'active', highestOffer: null, highestOfferBuyer: null, createdAt: new Date().toISOString() },
      { id: '4', name: 'Star Wars Action Figure — Darth Vader 1977', description: 'Original 1977 Kenner release, sealed in original packaging. True piece of cinema history.', price: 850, image: 'https://images.unsplash.com/photo-1608889476561-6242cfdbf4f2?w=600', sellerId: 'user1', sellerName: 'ComicCollector', status: 'active', highestOffer: null, highestOfferBuyer: null, createdAt: new Date().toISOString() },
      { id: '5', name: 'Magic: The Gathering — Black Lotus Alpha', description: 'Alpha edition, near mint, professionally authenticated. The holy grail of MTG.', price: 3000, image: 'https://images.unsplash.com/photo-1616901826816-7045fc2e8a8d?w=600', sellerId: 'user2', sellerName: 'ToyTrader', status: 'active', highestOffer: 2700, highestOfferBuyer: 'user1', createdAt: new Date().toISOString() },
      { id: '6', name: 'Vintage LEGO Space — Galaxy Explorer 497', description: 'Complete 1979 set, all original pieces, instructions included. Golden age LEGO.', price: 320, image: 'https://images.unsplash.com/photo-1581235725079-7c7783e6a2df?w=600', sellerId: 'user3', sellerName: 'CardMaster', status: 'active', highestOffer: null, highestOfferBuyer: null, createdAt: new Date().toISOString() }
    ], null, 2));
  }

  const usersPath = join(dataDir, 'users.json');
  if (!existsSync(usersPath)) {
    writeFileSync(usersPath, JSON.stringify([
      { id: 'user1', name: 'ComicCollector', password: '8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92', createdAt: new Date().toISOString() },
      { id: 'user2', name: 'ToyTrader', password: '8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92', createdAt: new Date().toISOString() },
      { id: 'user3', name: 'CardMaster', password: '8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92', createdAt: new Date().toISOString() }
    ], null, 2));
  }

  const msgsPath = join(dataDir, 'messages.json');
  if (!existsSync(msgsPath)) {
    writeFileSync(msgsPath, JSON.stringify([
      { id: 'msg1', itemId: '1', senderId: 'user2', senderName: 'ToyTrader', content: 'Is this still available?', type: 'text', price: null, originalPrice: null, status: null, timestamp: new Date(Date.now() - 86400000).toISOString(), readBy: ['user2'] },
      { id: 'msg2', itemId: '1', senderId: 'user1', senderName: 'ComicCollector', content: 'Yes, still available!', type: 'text', price: null, originalPrice: null, status: null, timestamp: new Date(Date.now() - 86000000).toISOString(), readBy: ['user1'] },
      { id: 'msg3', itemId: '1', senderId: 'user2', senderName: 'ToyTrader', content: 'Offer: $450', type: 'offer', price: 450, originalPrice: 500, status: 'pending', timestamp: new Date(Date.now() - 85000000).toISOString(), readBy: ['user2'] }
    ], null, 2));
  }
};

initData();

app.use('/api/items', itemsRouter);
app.use('/api/users', usersRouter);
app.use('/api/messages', messagesRouter);

app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString(), port: PORT });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

const server = app.listen(PORT, () => {
  console.log(`✅ Backend running on http://localhost:${PORT}`);
});

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`❌ Port ${PORT} in use. Try: PORT=3002 node index.js`);
    process.exit(1);
  }
});
