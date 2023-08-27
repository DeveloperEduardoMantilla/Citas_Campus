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

appPaciente.get("/medico/:idMedico", appVerifyPaciente, async(req, res)=>{
    try {
        let medicoId = parseInt(req.params.idMedico);
        let db = await conx();
        let collection = await db.collection("cita");
        let consult = await collection
          .find({cit_medico:medicoId},{
            projection:{
            "_id": 0,
            "cita_codigo":"$cit_codigo",
            "cita_fecha":"$cit_fecha",
            "cita_estado":"$cit_estadoCita",
            "cita_medico":"$cit_medico",
            "cita_idUsuario":"$cit_datosUsuario"
        }}).toArray();
        res.status(200).send(consult);
      } catch (e) {
        res.status(500).send("Erro=> "+e);
      }
})

appPaciente.get("/consultoria/:idPaciente", appVerifyPaciente, async(req, res)=>{
    try {
        let pacienteId = parseInt(req.params.idPaciente);
        let db = await conx();
        let collection = await db.collection("cita");
        let consult = await collection
        .aggregate([
            {
          $match: {
            cit_datosUsuario: pacienteId,
          },
        },
        {
          $lookup: {
            from: "usuario",
            localField: "cit_datosUsuario",
            foreignField: "usu_id",
            as: "datos_usuario",
          },
        },
        {
          $unwind: "$datos_usuario",
        },
        {
          $lookup: {
            from: "medico",
            localField: "cit_medico",
            foreignField: "med_nroMatriculaProsional",
            as: "datos_medico",
          },
        },
        {
          $unwind: "$datos_medico",
        },
        {
          $lookup: {
            from: "consultorio",
            localField: "datos_medico.med_consultorio",
            foreignField: "cons_codigo",
            as: "consultorio",
          },
        },
        {
          $unwind: "$consultorio",
        },
        {
          $project: {
            _id: 0,
            datos_usuario: { usu_nombre: 1, usu_segdo_nombre: 1 },
            consultorio: { cons_codigo: 1, cons_nombre:1 }
          },
        }
      ])
      .toArray();
      res.status(200).send(consult);
      } catch (e) {
        res.status(500).send("Erro=> "+e);
      }
})

export default appPaciente;
