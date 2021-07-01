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
      // if(!req.session.loginuser){
        req.session.loginuser = rows[0].User_name;
      // }
      res.render('main',{userid:req.session.loginuser});
    }else{
      console.log(pw,  rows[0].User_pw)
      res.send("로그인실패 패스워드 틀림");
    }
  })
}); 

module.exports = router;