const express = require('express');
const router = express.Router();
const { supabase } = require('../lib/supabase');

// 1. Ambil semua kategori (untuk halaman utama)
router.get('/categories', async (req, res) => {
  const { data, error } = await supabase
    .from('categories')
    .select('*')
    .order('name', { ascending: true });

  if (error) return res.status(400).json({ error: error.message });
  res.json(data);
});

// 2. Ambil daftar materi berdasarkan slug kategori (untuk sidebar materi)
router.get('/categories/:categorySlug/materi', async (req, res) => {
  const { categorySlug } = req.params;

  // Kita join untuk mencari category_id berdasarkan slug-nya
  const { data, error } = await supabase
    .from('materi')
    .select(`
      id, title, slug, order_index,
      categories!inner(slug)
    `)
    .eq('categories.slug', categorySlug)
    .order('order_index', { ascending: true });

  if (error) return res.status(400).json({ error: error.message });
  res.json(data);
});

// 3. Ambil detail konten materi tunggal
router.get('/materi/:materiSlug', async (req, res) => {
  const { materiSlug } = req.params;

  const { data, error } = await supabase
    .from('materi')
    .select('*')
    .eq('slug', materiSlug)
    .single(); // Kita hanya butuh satu data

  if (error) return res.status(404).json({ error: 'Materi tidak ditemukan' });
  res.json(data);
});

module.exports = router;