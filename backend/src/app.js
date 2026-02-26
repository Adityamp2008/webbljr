const express = require('express');
const cors = require('cors');
const learningRoutes = require('./routes/belajar.js');

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', learningRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server jalan di http://localhost:${PORT}`);
});