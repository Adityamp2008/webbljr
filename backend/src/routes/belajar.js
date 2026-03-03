const express = require('express');
const router = express.Router();
const { supabase } = require('../lib/supabase');
const { protectAdmin } = require('../middlewares/auth');

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

// --- CRUD KATEGORI ---

// Tambah Kategori Baru
router.post('/categories', /* protectAdmin, */ async (req, res) => {
  const { name, slug, description } = req.body;
  const { data, error } = await supabase
    .from('categories')
    .insert([{ name, slug, description }])
    .select();

  if (error) return res.status(400).json({ error: error.message });
  res.status(201).json(data);
});

// --- CRUD MATERI (PROTECTED) ---

// Tambah Materi Baru - Sekarang Terkunci!
router.post('/materi', /* protectAdmin, */ async (req, res) => {
  const { category_id, title, slug, content, order_index } = req.body;
  const { data, error } = await supabase
    .from('materi')
    .insert([{ category_id, title, slug, content, order_index }])
    .select();

  if (error) return res.status(400).json({ error: error.message });
  res.status(201).json(data);
});

// Update Materi - Sekarang Terkunci!
router.put('/materi/:id', /* protectAdmin, */ async (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  const { data, error } = await supabase
    .from('materi')
    .update(updates)
    .eq('id', id)
    .select();

  if (error) return res.status(400).json({ error: error.message });
  res.json(data);
});

// Hapus Materi - Sekarang Terkunci!
router.delete('/materi/:id', /* protectAdmin, */ async (req, res) => {
  const { id } = req.params;
  const { error } = await supabase
    .from('materi')
    .delete()
    .eq('id', id);

  if (error) return res.status(400).json({ error: error.message });
  res.json({ message: 'Materi berhasil dihapus' });
});

module.exports = router;