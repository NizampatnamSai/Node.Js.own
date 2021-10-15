 const { json } = require('express');
let express=require('express');
 let server=express();
 let port=3000;
 let data=[ { Name:'Jesus Christ!'},{From:'Najareth!'}]

// --------  For Normal! ------------

//  Only one responce at atime!
//  server.get('/getdata',(req,res)=>{
//     //  res.send('Praise the Lord!!!')
   
//      console.log(data)
//      res.send(data)
//     //  res.json('Praise the Lord!!!')
//     console.log(req.headers.host)

//  })


//  ------------------For Specified Host!---------

//  server.get('/getdata',(req,res)=>{
    
//     console.log(req.headers.host)
//     if( req.headers.host==='127.0.0.1:3000'){
//      res.send(data)}
//     //  res.json('Praise the Lord!!!')
//     else{
//         res.json('Praise the Lord!!!')
//     }

//  })

//  ------------For Specified Browser!-----

// let otharize=(req,res,next)=>{
//     if ( req.headers['user-agent']==='Thunder Client (https://www.thunderclient.io)')
// next()
//     else{
//         res.send('U r unotharized!')
//     }
// }

// server.get('/',otharize,(req,res)=>{
//     res.send(data)
// })



// ---------- For Admin Use only!-----

// let admin=(req,res,next)=>{
//     if (req.headers.admin==='true') next();
//     else{
//         res.send('U cant do this opiration! ')
//     }
// }
// server.get('/admin',admin,(req,res)=>{
//     res.json(data)
// })


//  ---------------For using body of request!----
//  This is used to convert to JSon!
server.use(express.json()) 

 server.post('/signup',(req,res)=>{
    //  res.send('Prase the Lord!, Hallaluya!!!!')
     res.send(data)
     console.log(req.body)
 })
 server.get('/admin',(req,res)=>{
        res.send(req.headers['user-agent'])})
 server.listen(port,()=>{
     console.log(`server listening at port no: ${port}`)
 })