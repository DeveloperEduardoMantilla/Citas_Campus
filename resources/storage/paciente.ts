import {Expose} from "class-transformer";
import {IsDefined} from "class-validator";

export class dtoPaciente{
    @Expose({name:"paciente_id"})
    @IsDefined({message:()=>{throw{status:422, message:'El campo paciente_id es obligatorio'}}})
    usu_id:number;

    @Expose({name:"paciente_primerNombre"})
    @IsDefined({message:()=>{throw{status:422, message:'El campo paciente_primerNombre es obligatorio'}}})
    usu_nombre:string;

    @Expose({name:"paciente_segundoNombre"})
    @IsDefined({message:()=>{throw{status:422, message:'El campo paciente_segundoNombre es obligatorio'}}})
    usu_segdo_nombre:number;

    @Expose({name:"paciente_primerApellido"})
    @IsDefined({message:()=>{throw{status:422, message:'El campo paciente_primerApellido es obligatorio'}}})
    usu_primer_apellido_usuar:number;

    @Expose({name:"paciente_segundoApellido"})
    @IsDefined({message:()=>{throw{status:422, message:'El campo paciente_segundoApellido es obligatorio'}}})
    usu_segdo_apellido_usuar:number;

    @Expose({name:"paciente_telefono"})
    @IsDefined({message:()=>{throw{status:422, message:'El campo paciente_telefono es obligatorio'}}})
    usu_telefono:number;

    @Expose({name:"paciente_direccion"})
    @IsDefined({message:()=>{throw{status:422, message:'El campo paciente_direccion es obligatorio'}}})
    usu_direccion:string;

    @Expose({name:"paciente_email"})
    @IsDefined({message:()=>{throw{status:422, message:'El campo paciente_email es obligatorio'}}})
    usu_email:string;

    @Expose({name:"paciente_tipoDocumento"})
    @IsDefined({message:()=>{throw{status:422, message:'El campo paciente_tipoDocumento es obligatorio'}}})
    usu_tipodoc:string;

    @Expose({name:"paciente_genero"})
    @IsDefined({message:()=>{throw{status:422, message:'El campo usuario_genero es obligatorio'}}})
    usu_genero:string;

    @Expose({name:"paciente_acudiente"})
    @IsDefined({message:()=>{throw{status:422, message:'El campo usu_acudiente es obligatorio'}}})
    usu_acudiente:string;

    constructor(data: Partial<dtoPaciente>){
        Object.assign(this, data);
        this.usu_id=0;
        this.usu_nombre="";
        this.usu_segdo_nombre=0;
        this.usu_primer_apellido_usuar=0;
        this.usu_segdo_apellido_usuar=0;
        this.usu_telefono=0;
        this.usu_direccion="";
        this.usu_email="";
        this.usu_tipodoc="";
        this.usu_genero="";
        this.usu_acudiente="";
    }

}

export default dtoPaciente;