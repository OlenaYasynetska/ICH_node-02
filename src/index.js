const express = require('express');
const cors = require('cors');
const { chatEmitter, sendMessage } = require('./chat_app');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Chat API is running' });
});

app.post('/send-message', (req, res) => {
  const { user, message } = req.body;
  if (!user || !message) {
    return res.status(400).json({ error: 'User and message are required' });
  }
  
  sendMessage(user, message, chatEmitter);
  res.json({ success: true, user, message });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log('Chat application started');
});
