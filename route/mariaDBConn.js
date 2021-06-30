const mariadb = require('mariadb');
const vals = require('./consts.js');
const pool = mariadb.createPool({
    host: vals.DBHost,
    port: vals.DBPort,
    user: vals.DBUser,
    password: vals.DBPass,
    connectionLimit: 5 });

async function GetUserList(){ 
        let conn, rows; 
        try{ 
            conn = await pool.getConnection(); 
            conn.query('USE date_user'); 
            rows = await conn.query('SELECT * FROM user'); 
        } catch(err){ 
            throw err; 
        } finally{ 
            if (conn) 
                conn.end(); 
                return rows; 
            } 
        }  
    
    async function addUser(Userid, Userpw, Username, Userage, Usergender, Usermbti, Userphone){ 
            let conn, rows; 
            try{ 
                conn = await pool.getConnection(); 
                conn.query('USE date_user'); 
                console.log("userid ", userid);
                var result = 
                 await conn.query(`insert into users (User_id, User_pw, User_name, User_age, User_gender, User_mbti, User_phone) values ('${Userid}','${Userpw}','${Username}', '${Userage}', '${Usergender}', '${Usermbti}', '${Userphone}'  )`);
    
            } catch(err){ 
                throw err; 
            } finally{  
                if (conn) 
                    conn.end(); 
                    return result; 
                } 
            }  
            async function GetUser(userid){ 
                let conn, rows; 
                try{ 
                    conn = await pool.getConnection(); 
                    conn.query('USE date_user'); 
                    console.log("userid ", userid);
                    rows = await conn.query(` SELECT * FROM users where user_id='${userid}'`);
        
                } catch(err){ 
                    throw err; 
                } finally{  
                    if (conn) 
                        conn.end(); 
                        return rows; 
                    } 
                }     
        module.exports = { getUserList: GetUserList,  getUser:GetUser ,  addUser:addUser  } 
        //다른 파일에서 GetUserList 를  getUserList로 불러서 쓸수 있음 
    
       