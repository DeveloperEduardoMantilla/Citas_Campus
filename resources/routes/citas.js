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

appCita.get("/:date", appVerifyCita, async(req, res)=>{
    
    let date = req.params.date;
 
    let dateFormat= /^\d{4}-\d{2}-\d{2}$/;
    
    if (!dateFormat.test(date)) {
        res.status(400).json({message:"Formato de fecha inválido. Utiliza aaaa-mm-dd."});
        return;
    }

    let db = await conx();
    let cita = db.collection("cita");

    let result = await cita.find({cit_fecha:date},{projection:{
        "_id":0,
        "cita_codigo":"$cit_codigo",
        "cita_fecha":"$cit_fecha",
        "cita_estadoCita":"$cit_estadoCita",
        "cita_medico":"$cit_medico",
        "cita_datosUsuario":"$cit_datosUsuario",
    }}).sort({cita_codigo:1}).toArray();
    res.send(result);
})

appCita.get("/rechazada/:mes", appVerifyCita, async(req, res)=>{

    try{

    let mes = req.params.mes; 
    let monthFormat = /^(1[0-2]|[1-9])$/;
    
    if (!monthFormat.test("10")) {
        res.status(400).json({message:"Formato de mes inválido. Utiliza solo numero positivos entre 1 y 12."});
        return;
    }

    if(mes <1 || mes >12){
        res.status(400).json({message:"Utiliza solo numero positivos entre 1 y 12."});
        return;
    }

    let db = await conx();
    let cita = db.collection("cita");

    let result = await cita.aggregate([
        {
            $match: {
                "cit_estadoCita": 2,
                "cit_fecha": {
                    $regex: `^2023-${mes}-`
                }
            }
        },
        {
            $lookup: {
                from: "usuario",
                localField: "cit_datosUsuario",
                foreignField: "usu_id",
                as: "usuario"
            }
        },
        {
            $lookup: {
                from: "medico",
                localField: "cit_medico",
                foreignField: "med_nroMatriculaProsional",
                as: "medico"
            }
        },
        {
            $project: {
                "_id": 0,
                "cita_fecha":"$cit_fecha",
                "cita_estado":"Rechazada",
                "cita_paciente":{ $arrayElemAt: ["$usuario.usu_nombre", 0] },
                "cita_medico": { $arrayElemAt: ["$medico.med_nombreCompleto", 0] }
            }
        }
    ]).toArray();
    if(result.length>0){
        res.send(result);
    }else{
        res.send({message:"No se encontraron registros en el sistema."})
    }
    
    }catch(e){
        res.status(400).send({message:e.message})
    }
})

export default appCita;
