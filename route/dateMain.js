const express = require('express');
const path = require('path');

const router = express.Router();

// GET /login 라우터
router.get('/', (req, res) => { 
  res.sendFile(path.join(__dirname, '../public/html/dating-1.html')); 
});

module.exports = router;