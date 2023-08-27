import express from "express";
import {conx} from "../db/atlas.js";
import {appVerifyPaciente} from "../middleware/verifyPaciente.js";

const appPaciente = express();

appPaciente.get("/", appVerifyPaciente, async(req, res)=>{
    let db = await conx();
    let paciente = db.collection("usuario");
    let result = await paciente.find({},{projection:{
        "_id":0,
        "paciente_id":"$usu_id",
        "paciente_primerNombre":"$usu_nombre",
        "paciente_segundoNombre":"$usu_segdo_nombre",
        "paciente_primerApellido":"$usu_primer_apellido_usuar",
        "paciente_segundoApellido":"$usu_segdo_apellido_usuar",
        "paciente_telefono":"$usu_telefono",
        "paciente_direccion":"$usu_direccion",
        "paciente_email":"$usu_email",
        "paciente_tipoDocumento":"$usu_tipodoc",
        "paciente_genero":"$usuario_genero",
        "paciente_acudiente":"$usu_acudiente"
    }}).sort({usu_nombre:1}).toArray();
    res.send(result);
})

export default appPaciente;
