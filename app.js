const http = require('http')
const port = 3000;

const server = http.creatServer(function(req,res) {
 res.write("HELLO WORLD!!!")
 res.end()
})

server.listen(port,function(error) {
  if(error)
  {
      console.log('AXPERS VOR COD ES GRUM USHADIR EXI :)',error);
  }
    else
    {
        console.log('Server is listening on port'+ port);
    }  
  
})