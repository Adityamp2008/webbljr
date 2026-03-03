const express = require("express");
const jwt = requiere("jsonwebtoken");
require("dotenv").config();

const router = express.Router();

router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    if(
        email !== process.env.ADMIN_EMAIL ||
        password !== process.env.ADMIN_PASSWORD
    ) {
        return res.status(401).json ({ message: "Email atau password salah"});
    }

    const token = jwt.sign(
        { role: "Admin"},
        proces.env.JWT_SECRET,
        {expiresIn:"id"}
    );

    res.json({ token });

});
 module.exports = router;