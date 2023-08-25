import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
let appExpress = express();

appExpress.use(express.json());

appExpress.use("/",(req,res)=>{
    res.json({status:"404",message:"Hola Crack, te cuento que no haz establecido una ruta valida."})
})

let config = JSON.parse(process.env.MY_SERVER)
appExpress.listen(config, ()=>{
    console.log(`http://${config.hostname}:${config.port}`)
})