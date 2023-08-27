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

export default appMedico;
