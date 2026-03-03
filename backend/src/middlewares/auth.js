const { supabase } = require('../lib/supabase');

const protectAdmin = async (req, res, next) => {
  // 1. Ambil token dari header 'Authorization'
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Akses ditolak. Token tidak ditemukan.' });
  }

  const token = authHeader.split(' ')[1];

  // 2. Verifikasi token ke Supabase
  const { data: { user }, error } = await supabase.auth.getUser(token);

  if (error || !user) {
    return res.status(401).json({ error: 'Token tidak valid atau sudah kadaluwarsa.' });
  }

  // 3. (Opsional) Cek apakah email user adalah email admin kamu
  if (user.email !== 'admin@emailkamu.com') {
    return res.status(403).json({ error: 'Anda bukan Admin!' });
  }

  // Jika semua oke, lanjut ke fungsi berikutnya
  req.user = user;
  next();
};

module.exports = { protectAdmin };