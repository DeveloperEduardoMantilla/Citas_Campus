import {Expose} from "class-transformer";
import {IsDefined} from "class-validator";

export class dtoCita{
    @Expose({name:"cita_codigo"})
    @IsDefined({message:()=>{throw{status:422, message:'El campo cita_codigo es obligatorio'}}})
    cit_codigo:number;

    @Expose({name:"cita_fecha"})
    @IsDefined({message:()=>{throw{status:422, message:'El campo cita_fecha es obligatorio'}}})
    cit_fecha:string;

    @Expose({name:"cita_estadoCita"})
    @IsDefined({message:()=>{throw{status:422, message:'El campo cita_estadoCita es obligatorio'}}})
    cit_estadoCita:number;

    @Expose({name:"cita_medico"})
    @IsDefined({message:()=>{throw{status:422, message:'El campo cita_medico es obligatorio'}}})
    cit_medico:number;

    @Expose({name:"cita_datosUsuario"})
    @IsDefined({message:()=>{throw{status:422, message:'El campo cita_datosUsuario es obligatorio'}}})
    cit_datosUsuario:number;

    constructor(data: Partial<dtoCita>){
        Object.assign(this, data);
        this.cit_codigo=0;
        this.cit_fecha="";
        this.cit_estadoCita=0;
        this.cit_medico=0;
        this.cit_datosUsuario=0;
    }

}

export default dtoCita;