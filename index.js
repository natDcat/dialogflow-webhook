const express = require('express');
const app = express();

app.use(express.json());

app.post('/webhook', (req, res) => {
  console.log('Received request:', req.body);
  res.json({ fulfillmentText: 'Webhook response from server!' });
});

// Render kräver att vi använder process.env.PORT
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

