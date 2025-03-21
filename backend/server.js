const express = require('express');
const cors = require('cors'); // Import cors
const app = express();
const PORT = 5000;

// Use cors middleware
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello from Treasy backend!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});