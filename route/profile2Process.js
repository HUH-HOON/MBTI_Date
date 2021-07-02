const mdbConn = require('./mariaDBConn.js') // "mariaDBConn.js" 파일을 불러옴. 

const express = require('express');
const path = require('path');
const session = require('express-session');
const router = express.Router();

router.post('/', (req, res) => {  
      let  mbti  = req.body['own_mbti'] // POST 방식 요청이면  req.body[".."] 로 
      if(req.session.gender==="F"){
      mdbConn.getUserMbtiF(mbti).then((rows) => {

        console.log( rows ) ;
           if(req.session.gender==="F")
            req.session.name1 = rows[0].User_name;
            req.session.mbti1 = rows[0].User_mbti;
            req.session.gender1 = rows[0].User_gender;
            req.session.age1 = rows[0].User_age;
            req.session.phone1=rows[0].User_phone;
           
            req. session.img = "<img src='/static/image/"+req.session.mbti1+".jpg'>";
        res.render('profile2',{img : req.session.img, name1:req.session.name1, mbti1:req.session.mbti1, gender1:req.session.gender1, age1:req.session.age1, phone1:req.session.phone1});
 })}
 else if(req.session.gender==="M"){
  mdbConn.getUserMbtiM(mbti).then((rows) => {

    console.log( rows ) ;
       if(req.session.gender==="M")
        req.session.name1 = rows[0].User_name;
        req.session.mbti1 = rows[0].User_mbti;
        req.session.gender1 = rows[0].User_gender;
        req.session.age1 = rows[0].User_age;
        req.session.phone1=rows[0].User_phone;
       
        req. session.img = "<img src='/static/image/"+req.session.mbti1+".jpg'>";
    res.render('profile2',{img : req.session.img, name1:req.session.name1, mbti1:req.session.mbti1, gender1:req.session.gender1, age1:req.session.age1, phone1:req.session.phone1});
})}

 
    }); 

    module.exports = router;