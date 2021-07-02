const mdbConn = require('./mariaDBConn.js') // "mariaDBConn.js" 파일을 불러옴. 

const express = require('express');
const path = require('path');
const session = require('express-session');
const router = express.Router();

// POST 방식 요청이면  /loginProcess 라우터  
router.post('/', (req, res) => {  
      console.log(req.session.mbti )
      if(req.session.gender ==="F"){
      if(req.session.mbti === "INTJ"){
            console.log("mbti=",req.session.mbti);
            mbtii = "ENFP";
            mdbConn.getUserMbtiF(mbtii).then((rows) => {
                      req.session.name2 = rows[0].User_name;
                      req.session.mbti2 = rows[0].User_mbti;
                      req.session.gender2 = rows[0].User_gender;
                      req.session.age2 = rows[0].User_age;
                      req.session.phone2 =rows[0].User_phone;
                      res.render('profile1',{ name2:req.session.name2, mbti2:req.session.mbti2, gender2:req.session.gender2, age2:req.session.age2, phone2:req.session.phone2});
      })}else if(req.session.mbti === "INTP"){
            console.log("mbti=",req.session.mbti);
            mbtii = "ENTJ";
            mdbConn.getUserMbtiF(mbtii).then((rows) => {
                      req.session.name2 = rows[0].User_name;
                      req.session.mbti2 = rows[0].User_mbti;
                      req.session.gender2 = rows[0].User_gender;
                      req.session.age2 = rows[0].User_age;
                      req.session.phone2 =rows[0].User_phone;
                      res.render('profile1',{ name2:req.session.name2, mbti2:req.session.mbti2, gender2:req.session.gender2, age2:req.session.age2, phone2:req.session.phone2});
      })
         }
         else if(req.session.mbti === "ENTJ"){
            console.log("mbti=",req.session.mbti);
            mbtii = "INFP";
            mdbConn.getUserMbtiF(mbtii).then((rows) => {
                      req.session.name2 = rows[0].User_name;
                      req.session.mbti2 = rows[0].User_mbti;
                      req.session.gender2 = rows[0].User_gender;
                      req.session.age2 = rows[0].User_age;
                      req.session.phone2 =rows[0].User_phone;
                      res.render('profile1',{ name2:req.session.name2, mbti2:req.session.mbti2, gender2:req.session.gender2, age2:req.session.age2, phone2:req.session.phone2});
      })
         }
         else if(req.session.mbti === "ENTP"){
            console.log("mbti=",req.session.mbti);
            mbtii = "INFJ";
            mdbConn.getUserMbtiF(mbtii).then((rows) => {
                      req.session.name2 = rows[0].User_name;
                      req.session.mbti2 = rows[0].User_mbti;
                      req.session.gender2 = rows[0].User_gender;
                      req.session.age2 = rows[0].User_age;
                      req.session.phone2 =rows[0].User_phone;
                      res.render('profile1',{ name2:req.session.name2, mbti2:req.session.mbti2, gender2:req.session.gender2, age2:req.session.age2, phone2:req.session.phone2});
      })
         }
         else if(req.session.mbti === "INFJ"){
            console.log("mbti=",req.session.mbti);
            mbtii = "ENFP";
            mdbConn.getUserMbtiF(mbtii).then((rows) => {
                      req.session.name2 = rows[0].User_name;
                      req.session.mbti2 = rows[0].User_mbti;
                      req.session.gender2 = rows[0].User_gender;
                      req.session.age2 = rows[0].User_age;
                      req.session.phone2 =rows[0].User_phone;
                      res.render('profile1',{ name2:req.session.name2, mbti2:req.session.mbti2, gender2:req.session.gender2, age2:req.session.age2, phone2:req.session.phone2});
      })
         }
         else if(req.session.mbti === "INFP"){
            console.log("mbti=",req.session.mbti);
            mbtii = "ENFJ";
            mdbConn.getUserMbtiF(mbtii).then((rows) => {
                      req.session.name2 = rows[0].User_name;
                      req.session.mbti2 = rows[0].User_mbti;
                      req.session.gender2 = rows[0].User_gender;
                      req.session.age2 = rows[0].User_age;
                      req.session.phone2 =rows[0].User_phone;
                      res.render('profile1',{ name2:req.session.name2, mbti2:req.session.mbti2, gender2:req.session.gender2, age2:req.session.age2, phone2:req.session.phone2});
      })
         }
         else if(req.session.mbti === "ENFJ"){
            console.log("mbti=",req.session.mbti);
            mbtii = "INFP";
            mdbConn.getUserMbtiF(mbtii).then((rows) => {
                      req.session.name2 = rows[0].User_name;
                      req.session.mbti2 = rows[0].User_mbti;
                      req.session.gender2 = rows[0].User_gender;
                      req.session.age2 = rows[0].User_age;
                      req.session.phone2 =rows[0].User_phone;
                      res.render('profile1',{ name2:req.session.name2, mbti2:req.session.mbti2, gender2:req.session.gender2, age2:req.session.age2, phone2:req.session.phone2});
      })
         }
         else if(req.session.mbti === "ENFP"){
            console.log("mbti=",req.session.mbti);
            mbtii = "INFJ";
            mdbConn.getUserMbtiF(mbtii).then((rows) => {
                      req.session.name2 = rows[0].User_name;
                      req.session.mbti2 = rows[0].User_mbti;
                      req.session.gender2 = rows[0].User_gender;
                      req.session.age2 = rows[0].User_age;
                      req.session.phone2 =rows[0].User_phone;
                      res.render('profile1',{ name2:req.session.name2, mbti2:req.session.mbti2, gender2:req.session.gender2, age2:req.session.age2, phone2:req.session.phone2});
      })
         }
         else if(req.session.mbti === "ISTJ"){
            console.log("mbti=",req.session.mbti);
            mbtii = "ESFP";
            mdbConn.getUserMbtiF(mbtii).then((rows) => {
                      req.session.name2 = rows[0].User_name;
                      req.session.mbti2 = rows[0].User_mbti;
                      req.session.gender2 = rows[0].User_gender;
                      req.session.age2 = rows[0].User_age;
                      req.session.phone2 =rows[0].User_phone;
                      res.render('profile1',{ name2:req.session.name2, mbti2:req.session.mbti2, gender2:req.session.gender2, age2:req.session.age2, phone2:req.session.phone2});
      })
         }
         else if(req.session.mbti === "ISFJ"){
            console.log("mbti=",req.session.mbti);
            mbtii = "ESFP";
            mdbConn.getUserMbtiF(mbtii).then((rows) => {
                      req.session.name2 = rows[0].User_name;
                      req.session.mbti2 = rows[0].User_mbti;
                      req.session.gender2 = rows[0].User_gender;
                      req.session.age2 = rows[0].User_age;
                      req.session.phone2 =rows[0].User_phone;
                      res.render('profile1',{ name2:req.session.name2, mbti2:req.session.mbti2, gender2:req.session.gender2, age2:req.session.age2, phone2:req.session.phone2});
      })
         }
         else if(req.session.mbti === "ESTJ"){
            console.log("mbti=",req.session.mbti);
            mbtii = "INTP";
            mdbConn.getUserMbtiF(mbtii).then((rows) => {
                      req.session.name2 = rows[0].User_name;
                      req.session.mbti2 = rows[0].User_mbti;
                      req.session.gender2 = rows[0].User_gender;
                      req.session.age2 = rows[0].User_age;
                      req.session.phone2 =rows[0].User_phone;
                      res.render('profile1',{ name2:req.session.name2, mbti2:req.session.mbti2, gender2:req.session.gender2, age2:req.session.age2, phone2:req.session.phone2});
      })
         }
         else if(req.session.mbti === "ESFJ"){
            console.log("mbti=",req.session.mbti);
            mbtii = "ISFP";
            mdbConn.getUserMbtiF(mbtii).then((rows) => {
                      req.session.name2 = rows[0].User_name;
                      req.session.mbti2 = rows[0].User_mbti;
                      req.session.gender2 = rows[0].User_gender;
                      req.session.age2 = rows[0].User_age;
                      req.session.phone2 =rows[0].User_phone;
                      res.render('profile1',{ name2:req.session.name2, mbti2:req.session.mbti2, gender2:req.session.gender2, age2:req.session.age2, phone2:req.session.phone2});
      })
         }
         else if(req.session.mbti === "ISTP"){
            console.log("mbti=",req.session.mbti);
            mbtii = "ESFJ";
            mdbConn.getUserMbtiF(mbtii).then((rows) => {
                      req.session.name2 = rows[0].User_name;
                      req.session.mbti2 = rows[0].User_mbti;
                      req.session.gender2 = rows[0].User_gender;
                      req.session.age2 = rows[0].User_age;
                      req.session.phone2 =rows[0].User_phone;
                      res.render('profile1',{ name2:req.session.name2, mbti2:req.session.mbti2, gender2:req.session.gender2, age2:req.session.age2, phone2:req.session.phone2});
      })
         }
         else if(req.session.mbti === "ISFP"){
            console.log("mbti=",req.session.mbti);
            mbtii = "ENFJ";
            mdbConn.getUserMbtiF(mbtii).then((rows) => {
                      req.session.name2 = rows[0].User_name;
                      req.session.mbti2 = rows[0].User_mbti;
                      req.session.gender2 = rows[0].User_gender;
                      req.session.age2 = rows[0].User_age;
                      req.session.phone2 =rows[0].User_phone;
                      res.render('profile1',{ name2:req.session.name2, mbti2:req.session.mbti2, gender2:req.session.gender2, age2:req.session.age2, phone2:req.session.phone2});
      })
         }
         else if(req.session.mbti === "ESTP"){
            console.log("mbti=",req.session.mbti);
            mbtii = "ISFJ";
            mdbConn.getUserMbtiF(mbtii).then((rows) => {
                      req.session.name2 = rows[0].User_name;
                      req.session.mbti2 = rows[0].User_mbti;
                      req.session.gender2 = rows[0].User_gender;
                      req.session.age2 = rows[0].User_age;
                      req.session.phone2 =rows[0].User_phone;
                      res.render('profile1',{ name2:req.session.name2, mbti2:req.session.mbti2, gender2:req.session.gender2, age2:req.session.age2, phone2:req.session.phone2});
      })
         }
         else if(req.session.mbti === "ESFP"){
            console.log("mbti=",req.session.mbti);
            mbtii = "ISFJ";
            mdbConn.getUserMbtiF(mbtii).then((rows) => {
                      req.session.name2 = rows[0].User_name;
                      req.session.mbti2 = rows[0].User_mbti;
                      req.session.gender2 = rows[0].User_gender;
                      req.session.age2 = rows[0].User_age;
                      req.session.phone2 =rows[0].User_phone;
                      res.render('profile1',{ name2:req.session.name2, mbti2:req.session.mbti2, gender2:req.session.gender2, age2:req.session.age2, phone2:req.session.phone2});
      })
         }

}
if(req.session.gender ==="M"){
   if(req.session.mbti === "INTJ"){
         console.log("mbti=",req.session.mbti);
         mbtii = "ENFP";
         mdbConn.getUserMbtiM(mbtii).then((rows) => {
                   req.session.name2 = rows[0].User_name;
                   req.session.mbti2 = rows[0].User_mbti;
                   req.session.gender2 = rows[0].User_gender;
                   req.session.age2 = rows[0].User_age;
                   req.session.phone2 =rows[0].User_phone;
                   res.render('profile1',{ name2:req.session.name2, mbti2:req.session.mbti2, gender2:req.session.gender2, age2:req.session.age2, phone2:req.session.phone2});
   })}else if(req.session.mbti === "INTP"){
         console.log("mbti=",req.session.mbti);
         mbtii = "ENTJ";
         mdbConn.getUserMbtiM(mbtii).then((rows) => {
                   req.session.name2 = rows[0].User_name;
                   req.session.mbti2 = rows[0].User_mbti;
                   req.session.gender2 = rows[0].User_gender;
                   req.session.age2 = rows[0].User_age;
                   req.session.phone2 =rows[0].User_phone;
                   res.render('profile1',{ name2:req.session.name2, mbti2:req.session.mbti2, gender2:req.session.gender2, age2:req.session.age2, phone2:req.session.phone2});
   })
      }
      else if(req.session.mbti === "ENTJ"){
         console.log("mbti=",req.session.mbti);
         mbtii = "INFP";
         mdbConn.getUserMbtiM(mbtii).then((rows) => {
                   req.session.name2 = rows[0].User_name;
                   req.session.mbti2 = rows[0].User_mbti;
                   req.session.gender2 = rows[0].User_gender;
                   req.session.age2 = rows[0].User_age;
                   req.session.phone2 =rows[0].User_phone;
                   res.render('profile1',{ name2:req.session.name2, mbti2:req.session.mbti2, gender2:req.session.gender2, age2:req.session.age2, phone2:req.session.phone2});
   })
      }
      else if(req.session.mbti === "ENTP"){
         console.log("mbti=",req.session.mbti);
         mbtii = "INFJ";
         mdbConn.getUserMbtiM(mbtii).then((rows) => {
                   req.session.name2 = rows[0].User_name;
                   req.session.mbti2 = rows[0].User_mbti;
                   req.session.gender2 = rows[0].User_gender;
                   req.session.age2 = rows[0].User_age;
                   req.session.phone2 =rows[0].User_phone;
                   res.render('profile1',{ name2:req.session.name2, mbti2:req.session.mbti2, gender2:req.session.gender2, age2:req.session.age2, phone2:req.session.phone2});
   })
      }
      else if(req.session.mbti === "INFJ"){
         console.log("mbti=",req.session.mbti);
         mbtii = "ENFP";
         mdbConn.getUserMbtiM(mbtii).then((rows) => {
                   req.session.name2 = rows[0].User_name;
                   req.session.mbti2 = rows[0].User_mbti;
                   req.session.gender2 = rows[0].User_gender;
                   req.session.age2 = rows[0].User_age;
                   req.session.phone2 =rows[0].User_phone;
                   res.render('profile1',{ name2:req.session.name2, mbti2:req.session.mbti2, gender2:req.session.gender2, age2:req.session.age2, phone2:req.session.phone2});
   })
      }
      else if(req.session.mbti === "INFP"){
         console.log("mbti=",req.session.mbti);
         mbtii = "ENFJ";
         mdbConn.getUserMbtiM(mbtii).then((rows) => {
                   req.session.name2 = rows[0].User_name;
                   req.session.mbti2 = rows[0].User_mbti;
                   req.session.gender2 = rows[0].User_gender;
                   req.session.age2 = rows[0].User_age;
                   req.session.phone2 =rows[0].User_phone;
                   res.render('profile1',{ name2:req.session.name2, mbti2:req.session.mbti2, gender2:req.session.gender2, age2:req.session.age2, phone2:req.session.phone2});
   })
      }
      else if(req.session.mbti === "ENFJ"){
         console.log("mbti=",req.session.mbti);
         mbtii = "INFP";
         mdbConn.getUserMbtiM(mbtii).then((rows) => {
                   req.session.name2 = rows[0].User_name;
                   req.session.mbti2 = rows[0].User_mbti;
                   req.session.gender2 = rows[0].User_gender;
                   req.session.age2 = rows[0].User_age;
                   req.session.phone2 =rows[0].User_phone;
                   res.render('profile1',{ name2:req.session.name2, mbti2:req.session.mbti2, gender2:req.session.gender2, age2:req.session.age2, phone2:req.session.phone2});
   })
      }
      else if(req.session.mbti === "ENFP"){
         console.log("mbti=",req.session.mbti);
         mbtii = "INFJ";
         mdbConn.getUserMbtiM(mbtii).then((rows) => {
                   req.session.name2 = rows[0].User_name;
                   req.session.mbti2 = rows[0].User_mbti;
                   req.session.gender2 = rows[0].User_gender;
                   req.session.age2 = rows[0].User_age;
                   req.session.phone2 =rows[0].User_phone;
                   res.render('profile1',{ name2:req.session.name2, mbti2:req.session.mbti2, gender2:req.session.gender2, age2:req.session.age2, phone2:req.session.phone2});
   })
      }
      else if(req.session.mbti === "ISTJ"){
         console.log("mbti=",req.session.mbti);
         mbtii = "ESFP";
         mdbConn.getUserMbtiM(mbtii).then((rows) => {
                   req.session.name2 = rows[0].User_name;
                   req.session.mbti2 = rows[0].User_mbti;
                   req.session.gender2 = rows[0].User_gender;
                   req.session.age2 = rows[0].User_age;
                   req.session.phone2 =rows[0].User_phone;
                   res.render('profile1',{ name2:req.session.name2, mbti2:req.session.mbti2, gender2:req.session.gender2, age2:req.session.age2, phone2:req.session.phone2});
   })
      }
      else if(req.session.mbti === "ISFJ"){
         console.log("mbti=",req.session.mbti);
         mbtii = "ESFP";
         mdbConn.getUserMbtiM(mbtii).then((rows) => {
                   req.session.name2 = rows[0].User_name;
                   req.session.mbti2 = rows[0].User_mbti;
                   req.session.gender2 = rows[0].User_gender;
                   req.session.age2 = rows[0].User_age;
                   req.session.phone2 =rows[0].User_phone;
                   res.render('profile1',{ name2:req.session.name2, mbti2:req.session.mbti2, gender2:req.session.gender2, age2:req.session.age2, phone2:req.session.phone2});
   })
      }
      else if(req.session.mbti === "ESTJ"){
         console.log("mbti=",req.session.mbti);
         mbtii = "INTP";
         mdbConn.getUserMbtiM(mbtii).then((rows) => {
                   req.session.name2 = rows[0].User_name;
                   req.session.mbti2 = rows[0].User_mbti;
                   req.session.gender2 = rows[0].User_gender;
                   req.session.age2 = rows[0].User_age;
                   req.session.phone2 =rows[0].User_phone;
                   res.render('profile1',{ name2:req.session.name2, mbti2:req.session.mbti2, gender2:req.session.gender2, age2:req.session.age2, phone2:req.session.phone2});
   })
      }
      else if(req.session.mbti === "ESFJ"){
         console.log("mbti=",req.session.mbti);
         mbtii = "ISFP";
         mdbConn.getUserMbtiM(mbtii).then((rows) => {
                   req.session.name2 = rows[0].User_name;
                   req.session.mbti2 = rows[0].User_mbti;
                   req.session.gender2 = rows[0].User_gender;
                   req.session.age2 = rows[0].User_age;
                   req.session.phone2 =rows[0].User_phone;
                   res.render('profile1',{ name2:req.session.name2, mbti2:req.session.mbti2, gender2:req.session.gender2, age2:req.session.age2, phone2:req.session.phone2});
   })
      }
      else if(req.session.mbti === "ISTP"){
         console.log("mbti=",req.session.mbti);
         mbtii = "ESFJ";
         mdbConn.getUserMbtiM(mbtii).then((rows) => {
                   req.session.name2 = rows[0].User_name;
                   req.session.mbti2 = rows[0].User_mbti;
                   req.session.gender2 = rows[0].User_gender;
                   req.session.age2 = rows[0].User_age;
                   req.session.phone2 =rows[0].User_phone;
                   res.render('profile1',{ name2:req.session.name2, mbti2:req.session.mbti2, gender2:req.session.gender2, age2:req.session.age2, phone2:req.session.phone2});
   })
      }
      else if(req.session.mbti === "ISFP"){
         console.log("mbti=",req.session.mbti);
         mbtii = "ENFJ";
         mdbConn.getUserMbtiM(mbtii).then((rows) => {
                   req.session.name2 = rows[0].User_name;
                   req.session.mbti2 = rows[0].User_mbti;
                   req.session.gender2 = rows[0].User_gender;
                   req.session.age2 = rows[0].User_age;
                   req.session.phone2 =rows[0].User_phone;
                   res.render('profile1',{ name2:req.session.name2, mbti2:req.session.mbti2, gender2:req.session.gender2, age2:req.session.age2, phone2:req.session.phone2});
   })
      }
      else if(req.session.mbti === "ESTP"){
         console.log("mbti=",req.session.mbti);
         mbtii = "ISFJ";
         mdbConn.getUserMbtiM(mbtii).then((rows) => {
                   req.session.name2 = rows[0].User_name;
                   req.session.mbti2 = rows[0].User_mbti;
                   req.session.gender2 = rows[0].User_gender;
                   req.session.age2 = rows[0].User_age;
                   req.session.phone2 =rows[0].User_phone;
                   res.render('profile1',{ name2:req.session.name2, mbti2:req.session.mbti2, gender2:req.session.gender2, age2:req.session.age2, phone2:req.session.phone2});
   })
      }
      else if(req.session.mbti === "ESFP"){
         console.log("mbti=",req.session.mbti);
         mbtii = "ISFJ";
         mdbConn.getUserMbtiM(mbtii).then((rows) => {
                   req.session.name2 = rows[0].User_name;
                   req.session.mbti2 = rows[0].User_mbti;
                   req.session.gender2 = rows[0].User_gender;
                   req.session.age2 = rows[0].User_age;
                   req.session.phone2 =rows[0].User_phone;
                   res.render('profile1',{ name2:req.session.name2, mbti2:req.session.mbti2, gender2:req.session.gender2, age2:req.session.age2, phone2:req.session.phone2});
   })
      }

}
}); 

module.exports = router;