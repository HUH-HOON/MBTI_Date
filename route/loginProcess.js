const mdbConn = require('./mariaDBConn.js') // "mariaDBConn.js" 파일을 불러옴. 

const express = require('express');
const path = require('path');
const router = express.Router();

// POST 방식 요청이면  /loginProcess 라우터  
router.post('/', (req, res) => {  
  let  id  = req.body['id'] // POST 방식 요청이면  req.body[".."] 로 
  let  pw  = req.body['pw'] // POST 방식 요청이면  req.body[".."] 로 
 
  mdbConn.getUser(id).then((rows) => {
    console.log( rows ) ;
    if( !isNaN(rows)){
         res.send(" 로그인 실패 계정 없음")
    }
    else if(pw==rows[0].User_pw){
 
        req.session.name = rows[0].User_name;
        req.session.id = rows[0].User_id; 
        req.session.mbti = rows[0].User_mbti;
        req.session.gender = rows[0].User_gender;
        req.session.age = rows[0].User_age;
        req.session.phone=rows[0].User_phone;
        req.session.pw=rows[0].User_pw;
        
   
      res.render('main',{name:req.session.name, id:req.session.id, mbti:req.session.mbti, gender:req.session.gender, age:req.session.age, phone:req.sessionphone, pw:req.session.pw});
    }else{
      console.log(pw,  rows[0].User_pw)
      res.send("로그인실패 패스워드 틀림");
    }
  })
}); 

module.exports = router;