const express = require("express");
const supabase = require("../supabase");
const auth = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", auth, async (req, res) => {
  const { from, to, message, song } = req.body;

  const { data, error } = await supabase
    .from("messages")
    .insert([{ from_name: from, to_name: to, message, song }]);

  if (error) return res.status(500).json(error);

  res.json(data);
});


// public search
router.get("/:name", async (req, res) => {
  const { name } = req.params;

  const { data, error } = await supabase
    .from("messages")
    .select("*")
    .ilike("to_name", `%${name}%`);

  if (error) return res.status(500).json(error);

  res.json(data);
});

module.exports = router;
