const mdbConn = require('./mariaDBConn.js') // "mariaDBConn.js" 파일을 불러옴. 

const express = require('express');
const path = require('path');
const router = express.Router();

// POST 방식 요청이면  /loginProcess 라우터  
router.post('/', (req, res) => {  
  let  id  = req.body['id'] // POST 방식 요청이면  req.body[".."] 로 
  let  pw  = req.body['pw'] // POST 방식 요청이면  req.body[".."] 로 
  let  name  = req.body['name'] // POST 방식 요청이면  req.body[".."] 로
  let  age  = req.body['age']
  let  gender  = req.body['gender']
  let  mbti  = req.body['mbti']
  let  phone  = req.body['phoneno'] 
 
  mdbConn.addUser( id, pw, name, age, gender, mbti, phone ).then(()=>{ 
    res.sendFile(path.join(__dirname, '../public/html/index.html')); 
     }
   );
});

module.exports = router;