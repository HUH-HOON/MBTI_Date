const mdbConn = require('./mariaDBConn.js') // "mariaDBConn.js" 파일을 불러옴. 

const express = require('express');
const path = require('path');
const session = require('express-session');
const router = express.Router();

// POST 방식 요청이면  /loginProcess 라우터  
router.post('/', (req, res) => {  
 
      res.render('dateMain1',{name:req.session.name, id:req.session.id, mbti:req.session.mbti, gender:req.session.gender, age:req.session.age, phone:req.sessionphone, pw:req.session.pw});

}); 

module.exports = router;