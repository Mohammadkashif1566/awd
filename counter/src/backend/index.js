 import express from "express"
 import cors from 'cors';

 const app=express();
 app.use(cors());
 app.use(express.json());
 app.post('/api/login',(req,res) => {
     const{name,age}=req.body;
         if(!name || !age){
                 return res.status(400).json({error:'name and age are required'});
                     }
                         res.json({message:"student created successsfull",student:{name,age}});
                         });
                         app.listen(5000,( )=> {
                             console.log("server is running on port 5000");
                             });