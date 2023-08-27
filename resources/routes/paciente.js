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

appPaciente.get("/:idPaciente", appVerifyPaciente, async(req, res)=>{
    try {
        let pacienteId = parseInt(req.params.idPaciente);
        let db = await conx();
        let collection = await db.collection("cita");
        let consult = await collection
          .find({cit_datosUsuario:pacienteId},{
            projection:{
            "_id": 0,
            "cita_codigo":"$cit_codigo",
            "cita_fecha":"$cit_fecha",
            "cita_estado":"$cit_estadoCita",
            "cita_medico":"$cit_medico",
            "cita_idUsuario":"$cit_datosUsuario"
        }}).toArray();
        res.status(200).send(consult);
      } catch (err) {
        res.sendStatus(500);
        console.log(err);
      }
})

export default appPaciente;
