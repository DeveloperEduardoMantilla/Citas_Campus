import "reflect-metadata";
import { classToPlain, plainToClass } from "class-transformer";
import {Router} from "express";
import { estructuraDto } from "../controller/jwt.js";
import { validate } from 'class-validator';

const appVerifyMedico = Router();
const dtoData = Router();

appVerifyMedico.use((req, res, next)=>{
    if(req.rateLimits) return;
    let {payload} = req.data;
    let {iat, exp, ...newPayload} = payload;
    payload=newPayload;
    
    let clone = JSON.stringify(classToPlain(plainToClass(estructuraDto("medico").class, {}, {ignoreDecorators:true})));
    let verify = clone === JSON.stringify(payload);
    (!verify) ? res.status(406).send({status:406, message:"Token no valido para (Medico)"}): next();
})


dtoData.use(async (req,res,next)=>{
    try {
        let data = plainToClass(estructuraDto('medico').class, req.body);
        await validate(data);
        req.body = JSON.parse(JSON.stringify(data));
        next();
    } catch (error) {
        res.status(405).send({error:error, message: "Error en la data enviada "+error.message});
    }
});

export{
    appVerifyMedico,
    dtoData
}