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
export class dtoMedico {
    constructor(data) {
        Object.assign(this, data);
        this.med_nroMatriculaProsional = 0;
        this.med_nombreCompleto = "";
        this.med_consultorio = 0;
        this.med_especialidad = 0;
    }
}
__decorate([
    Expose({ name: "medico_nroMatricula" }),
    IsDefined({ message: () => { throw { status: 422, message: 'El campo medico_nroMatricula es obligatorio' }; } }),
    __metadata("design:type", Number)
], dtoMedico.prototype, "med_nroMatriculaProsional", void 0);
__decorate([
    Expose({ name: "medico_nombreCompleto" }),
    IsDefined({ message: () => { throw { status: 422, message: 'El campo medico_nombreCompleto es obligatorio' }; } }),
    __metadata("design:type", String)
], dtoMedico.prototype, "med_nombreCompleto", void 0);
__decorate([
    Expose({ name: "medico_consultorio" }),
    IsDefined({ message: () => { throw { status: 422, message: 'El campo medico_consultorio es obligatorio' }; } }),
    __metadata("design:type", Number)
], dtoMedico.prototype, "med_consultorio", void 0);
__decorate([
    Expose({ name: "medico_especialidad" }),
    IsDefined({ message: () => { throw { status: 422, message: 'El campo medico_especialidad es obligatorio' }; } }),
    __metadata("design:type", Number)
], dtoMedico.prototype, "med_especialidad", void 0);
export default dtoMedico;
