import {Expose} from "class-transformer";
import {IsDefined} from "class-validator";

export class dtoMedico{
    @Expose({name:"medico_nroMatricula"})
    @IsDefined({message:()=>{throw{status:422, message:'El campo medico_nroMatricula es obligatorio'}}})
    med_nroMatriculaProsional:number;

    @Expose({name:"medico_nombreCompleto"})
    @IsDefined({message:()=>{throw{status:422, message:'El campo medico_nombreCompleto es obligatorio'}}})
    med_nombreCompleto:string;

    @Expose({name:"medico_consultorio"})
    @IsDefined({message:()=>{throw{status:422, message:'El campo medico_consultorio es obligatorio'}}})
    med_consultorio:number;

    @Expose({name:"medico_especialidad"})
    @IsDefined({message:()=>{throw{status:422, message:'El campo medico_especialidad es obligatorio'}}})
    med_especialidad:number;

    constructor(data: Partial<dtoMedico>){
        Object.assign(this, data);
        this.med_nroMatriculaProsional=0;
        this.med_nombreCompleto="";
        this.med_consultorio=0;
        this.med_especialidad=0;
    }
}

export default dtoMedico;