const express = require('express');
const cors = require('cors');
const app = express();

const corsOptions = {
  origin: 'http://localhost:5173',
  methods: 'GET,POST,PUT,DELETE',
  optionsSuccessStatus: 200 
};

app.use(cors(corsOptions));

app.get('/api/materi', (req, res) => {
  const summary = materi.map(item => ({ id: item.id, title: item.title, slug: item.slug }));
  res.json(summary);
});


app.get('/api/lessons/:slug', (req, res) => {
  const lesson = materi.find(l => l.slug === req.params.slug);
  if (!lesson) return res.status(404).send('Materi tidak ditemukan');
  res.json(lesson);
});
