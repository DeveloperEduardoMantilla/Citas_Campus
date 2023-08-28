import express from "express";
import {conx} from "../db/atlas.js";
import {appVerifyMedico} from "../middleware/verifyMedico.js";

const appMedico = express();

appMedico.get("/:especialidad", appVerifyMedico, async(req, res)=>{
        let especialization = req.params.especialidad; 
        let db = await conx(); 
        let collection = await db.collection("medico");
        let consult = await collection.aggregate([
            
            {
                $lookup: {
                    from: "especialidad",
                    localField: "med_especialidad",
                    foreignField: "esp_id",
                    as: "especialidad"
                }
            },
            {
                $unwind: "$especialidad"
            },
            {
                $match: {
                    "especialidad.esp_nombre": ""+especialization
                }
            },
            {
                $project: {
                    _id: 0,
                    "medico_nroMatricula":"$med_nroMatriculaProsional",
                    "medico_nombreCompleto":"$med_nombreCompleto",
                    "medico_consultorio":"$med_consultorio",
                    "medico_especialidad":"$especialidad.esp_nombre"
                }
            }
        ]).toArray(); 

        res.status(200).send(consult); 
})

appMedico.get("/consulta/consultorio", appVerifyMedico, async(req, res)=>{

    let db = await conx(); 
    let collection = await db.collection("medico");

    let consult = await collection.aggregate([
        {
            $lookup: {
              from: "consultorio",
              localField: "med_consultorio",
              foreignField: "cons_codigo",
              as: "consultorio",
            },
        },
        {
            $project:{
                "medico_numeroMatricula":"$med_nroMatriculaProsional",
                "medico_nombreCompleto":"$med_nombreCompleto",
                "medico_consultorio":{ $arrayElemAt: ["$consultorio.cons_nombre", 0]},
                "medico_especialidad":"$med_especialidad",
            }
        }
    ]).toArray();

    res.status(200).send(consult); 
})

appMedico.get("/consulta/2/:medico/:fecha", appVerifyMedico, async (req, res)=>{
    console.log("Entre aca");
    let {medico, fecha} = req.params;

    let dateFormat= /^\d{4}-\d{2}-\d{2}$/;
    let medicoNumeroMat=/^[1-9][0-9]*$/;

    if (!dateFormat.test(fecha)) {
        res.status(400).json({message:"Formato de fecha inválido. Utiliza aaaa-mm-dd."});
        return;
    }
    if (!medicoNumeroMat.test(medico)) {
        res.status(400).json({message:"Formato de numero matricula medico inválido, solo se permite digitos positivos."});
        return;
    }

    let db = await conx(); 
    let collection = await db.collection("cita");
    let consult = await collection.aggregate([{
        $match: {
            "cit_medico": parseInt(medico),
            "cit_fecha": fecha
        }
    },{
        $group: {
            _id: "$cit_medico",
            totalCitas: { $sum: 1 }
        }
    }
    ]).toArray();

    res.status(200).send(consult); 
})
export default appMedico;
