// backend/index.js
const express = require('express');
const cors = require('cors');
const supabase = require('./db'); // Import koneksi dari file db.js

const app = express();
const PORT = process.env.PORT;

// Middleware
app.use(cors());
app.use(express.json());

// --- ENDPOINTS ---

// 1. Fungsi Pencarian Materi (Fitur Search Bar)
app.get('/api/search', async (req, res) => {
    const { q } = req.query; // Mengambil kata kunci dari ?q=...
    
    const { data, error } = await supabase
        .from('materi')
        .select('id, title, category, slug')
        .ilike('title', `%${q}%`); // Mencari judul yang mirip
        
    if (error) return res.status(500).json({ error: error.message });
    res.json(data);
});

// 2. Fungsi Ambil Materi berdasarkan Slug
app.get('/api/materi/:slug', async (req, res) => {
    const { data, error } = await supabase
        .from('materi')
        .select('*')
        .eq('slug', req.params.slug)
        .single();

    if (error) return res.status(404).json({ message: "Materi tidak ditemukan" });
    res.json(data);
});


app.listen(PORT, () => {
    console.log(`Server Belajar berjalan di http://localhost:${PORT}`);
});