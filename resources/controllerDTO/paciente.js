var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Expose } from "class-transformer";
import { IsDefined } from "class-validator";
export class dtoPaciente {
    constructor(data) {
        Object.assign(this, data);
        this.usu_id = 0;
        this.usu_nombre = "";
        this.usu_segdo_nombre = 0;
        this.usu_primer_apellido_usuar = 0;
        this.usu_segdo_apellido_usuar = 0;
        this.usu_telefono = 0;
        this.usu_direccion = "";
        this.usu_email = "";
        this.usu_tipodoc = "";
        this.usu_genero = "";
        this.usu_acudiente = "";
    }
}
__decorate([
    Expose({ name: "paciente_id" }),
    IsDefined({ message: () => { throw { status: 422, message: 'El campo paciente_id es obligatorio' }; } }),
    __metadata("design:type", Number)
], dtoPaciente.prototype, "usu_id", void 0);
__decorate([
    Expose({ name: "paciente_primerNombre" }),
    IsDefined({ message: () => { throw { status: 422, message: 'El campo paciente_primerNombre es obligatorio' }; } }),
    __metadata("design:type", String)
], dtoPaciente.prototype, "usu_nombre", void 0);
__decorate([
    Expose({ name: "paciente_segundoNombre" }),
    IsDefined({ message: () => { throw { status: 422, message: 'El campo paciente_segundoNombre es obligatorio' }; } }),
    __metadata("design:type", Number)
], dtoPaciente.prototype, "usu_segdo_nombre", void 0);
__decorate([
    Expose({ name: "paciente_primerApellido" }),
    IsDefined({ message: () => { throw { status: 422, message: 'El campo paciente_primerApellido es obligatorio' }; } }),
    __metadata("design:type", Number)
], dtoPaciente.prototype, "usu_primer_apellido_usuar", void 0);
__decorate([
    Expose({ name: "paciente_segundoApellido" }),
    IsDefined({ message: () => { throw { status: 422, message: 'El campo paciente_segundoApellido es obligatorio' }; } }),
    __metadata("design:type", Number)
], dtoPaciente.prototype, "usu_segdo_apellido_usuar", void 0);
__decorate([
    Expose({ name: "paciente_telefono" }),
    IsDefined({ message: () => { throw { status: 422, message: 'El campo paciente_telefono es obligatorio' }; } }),
    __metadata("design:type", Number)
], dtoPaciente.prototype, "usu_telefono", void 0);
__decorate([
    Expose({ name: "paciente_direccion" }),
    IsDefined({ message: () => { throw { status: 422, message: 'El campo paciente_direccion es obligatorio' }; } }),
    __metadata("design:type", String)
], dtoPaciente.prototype, "usu_direccion", void 0);
__decorate([
    Expose({ name: "paciente_email" }),
    IsDefined({ message: () => { throw { status: 422, message: 'El campo paciente_email es obligatorio' }; } }),
    __metadata("design:type", String)
], dtoPaciente.prototype, "usu_email", void 0);
__decorate([
    Expose({ name: "paciente_tipoDocumento" }),
    IsDefined({ message: () => { throw { status: 422, message: 'El campo paciente_tipoDocumento es obligatorio' }; } }),
    __metadata("design:type", String)
], dtoPaciente.prototype, "usu_tipodoc", void 0);
__decorate([
    Expose({ name: "usuario_genero" }),
    IsDefined({ message: () => { throw { status: 422, message: 'El campo usuario_genero es obligatorio' }; } }),
    __metadata("design:type", String)
], dtoPaciente.prototype, "usu_genero", void 0);
__decorate([
    Expose({ name: "usu_acudiente" }),
    IsDefined({ message: () => { throw { status: 422, message: 'El campo usu_acudiente es obligatorio' }; } }),
    __metadata("design:type", String)
], dtoPaciente.prototype, "usu_acudiente", void 0);
export default dtoPaciente;
