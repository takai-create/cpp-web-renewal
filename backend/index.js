import express from 'express';
import dotenv from 'dotenv';
import { askClaude } from './claude.js';

dotenv.config();

const app = express();
app.use(express.json());

app.post('/api/claude', async (req, res) => {
  const { prompt } = req.body;
  try {
    const result = await askClaude(prompt);
    res.json({ result });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Backend listening on port ${PORT}`);
});
