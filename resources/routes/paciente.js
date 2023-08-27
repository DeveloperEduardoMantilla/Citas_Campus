import express from "express";
import {conx} from "../db/atlas.js";
import {appVerifyPaciente} from "../middleware/verifyPaciente.js";

const appPaciente = express();

appPaciente.get("/", appVerifyPaciente, async(req, res)=>{
    let db = await conx();
    let paciente = db.collection("usuario");
    let result = await paciente.find({}).sort({usu_nombre:1}).toArray();
    res.send(result);
})

export default appPaciente;
