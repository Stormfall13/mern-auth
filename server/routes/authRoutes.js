const express = require('express');
const router = express.Router();
const cors = require('cors');
const { test } = require('../controllers/authController')

// middleware
router.use(
    cors({
        credentials: true,
        origin: 'http://localhost:5173'
    })
)

// router.get('/', (req, res) => {

// })
router.get('/', test)

module.exports = router