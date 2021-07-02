const mdbConn = require('./mariaDBConn.js') // "mariaDBConn.js" 파일을 불러옴. 

const express = require('express');
const path = require('path');
const session = require('express-session');
const router = express.Router();

// // POST 방식 요청이면  /loginProcess 라우터  
// router.post('/', (req, res) => {  
 
//       res.render('profile2',{name:req.session.name, id:req.session.id, mbti:req.session.mbti, gender:req.session.gender, age:req.session.age, phone:req.sessionphone, pw:req.session.pw});

// }); 

// module.exports = router;

router.post('/', (req, res) => {  
      let  mbti  = req.body['own_mbti'] // POST 방식 요청이면  req.body[".."] 로 
      
      mdbConn.getUserMbti(mbti).then((rows) => {

        console.log( rows ) ;
           
            req.session.name1 = rows[0].User_name;
            req.session.mbti1 = rows[0].User_mbti;
            req.session.gender1 = rows[0].User_gender;
            req.session.age1 = rows[0].User_age;
            req.session.phone1=rows[0].User_phone;
            
        res.render('profile2',{name1:req.session.name1, mbti1:req.session.mbti1, gender1:req.session.gender1, age1:req.session.age1, phone1:req.session.phone1});
      })
    }); 

    module.exports = router;