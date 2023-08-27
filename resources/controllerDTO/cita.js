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
export class dtoCita {
    constructor(data) {
        Object.assign(this, data);
        this.cit_codigo = 0;
        this.cit_fecha = "";
        this.cit_estadoCita = 0;
        this.cit_medico = 0;
        this.cit_datosUsuario = 0;
    }
}
__decorate([
    Expose({ name: "cita_codigo" }),
    IsDefined({ message: () => { throw { status: 422, message: 'El campo cita_codigo es obligatorio' }; } }),
    __metadata("design:type", Number)
], dtoCita.prototype, "cit_codigo", void 0);
__decorate([
    Expose({ name: "cita_fecha" }),
    IsDefined({ message: () => { throw { status: 422, message: 'El campo cita_fecha es obligatorio' }; } }),
    __metadata("design:type", String)
], dtoCita.prototype, "cit_fecha", void 0);
__decorate([
    Expose({ name: "cita_estadoCita" }),
    IsDefined({ message: () => { throw { status: 422, message: 'El campo cita_estadoCita es obligatorio' }; } }),
    __metadata("design:type", Number)
], dtoCita.prototype, "cit_estadoCita", void 0);
__decorate([
    Expose({ name: "cita_medico" }),
    IsDefined({ message: () => { throw { status: 422, message: 'El campo cita_medico es obligatorio' }; } }),
    __metadata("design:type", Number)
], dtoCita.prototype, "cit_medico", void 0);
__decorate([
    Expose({ name: "cita_datosUsuario" }),
    IsDefined({ message: () => { throw { status: 422, message: 'El campo cita_datosUsuario es obligatorio' }; } }),
    __metadata("design:type", Number)
], dtoCita.prototype, "cit_datosUsuario", void 0);
export default dtoCita;
