// 1. Load dotenv dulu
require('dotenv').config(); 

const { createClient } = require('@supabase/supabase-js');

// 2. Ambil variabelnya
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;

// 3. Tes apakah variabel terbaca (tambahkan ini untuk debug)
if (!supabaseUrl || !supabaseKey) {
  console.error("WADUH: Variabel ENV tidak terbaca! Periksa file .env kamu.");
}

const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = { supabase };