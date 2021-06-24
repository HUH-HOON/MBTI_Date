const http = require('http');
const fs = require('fs').promises;

http.createServer (async (req, res) =>{
  try { 
      if(req.url=="/")  {
        const data =  await fs.readFile('index.html');
        res.writeHead (200, { 'Content-Type': 'text/html; charset=utf-8' });
        return res.end (data); 
      } 
      try {
        const data = await fs.readFile(`.${req.url}`);
        return res.end(data);
      } 
      catch (err) {
        // 주소에 해당하는 라우트를 못 찾았다는 404 Not Found error 발생 
          return res.end();
      }
        
  } catch (err) {
    console.error(err);
    res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end(err.message);
    }
  }
)
  .listen(8080, () => {
    console.log('8080번 포트에서 서버 대기 중입니다');
  });
