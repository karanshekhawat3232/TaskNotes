// const fs=require("fs");
// fs.wriiteFile("hello.txt","hi  from script as ",(err)=>{
//  if(err)return err;
//  else return "done";

// });
// fs.appendFile("hello.txt"," and again hi again from script as append",(err)=>{
//  if(err)return err;
//  else return "done";
// });
// fs.copyFile("hello.txt","./copiedfolder/hello_Copy.txt",(err)=>{
//     if(err)return err;
//     else return "done";
// });

// fs.rename("./copiedfolder/hello_Copy.txt","copied_in_folder.txt",(err)=>{
//         if(err) {console.log("doomed");}
//         else {console.log("doone");}
// });
// const http=require("http");
// const server=http.createServer((req,res)=>{res.end("haa bhai");});
// server.listen(5500);
const express=require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true }));
app.use((res,req,next)=>{
    console.log("i am middelware");
    next();
    ;});
app.get('/', (req, res) => {
  res.send('after nodemon it will be live');
})
app.get("/profile",(req,res)=>{
    res.send("profile route after domain")
    ;})
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
})