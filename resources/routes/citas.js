import express from "express";
import {conx} from "../db/atlas.js";
import {appVerifyCita} from "../middleware/verifyCita.js";

const appCita = express();

appCita.get("/", appVerifyCita, async(req, res)=>{
    let db = await conx();
    let cita = db.collection("cita");

    let result = await cita.find({},{projection:{
        "_id":0,
        "cita_codigo":"$cit_codigo",
        "cita_fecha":"$cit_fecha",
        "cita_estadoCita":"$cit_estadoCita",
        "cita_medico":"$cit_medico",
        "cita_datosUsuario":"$cit_datosUsuario",
    }}).sort({cita_codigo:1}).toArray();
    res.send(result);
})

export default appCita;
