"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Events = void 0;
const typeorm_1 = require("typeorm");
const UpdateDateColumn_1 = require("typeorm/decorator/columns/UpdateDateColumn");
const class_transformer_1 = require("class-transformer");
const swagger_1 = require("@nestjs/swagger");
const types_entity_1 = require("./types.entity");
let Events = class Events {
};
exports.Events = Events;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Events.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'iddevice'
    }),
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", Number)
], Events.prototype, "iddevice", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'identificação'
    }),
    (0, typeorm_1.Column)({ length: 100, nullable: false }),
    __metadata("design:type", String)
], Events.prototype, "access", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'sector'
    }),
    (0, typeorm_1.Column)({ length: 100, nullable: false }),
    __metadata("design:type", String)
], Events.prototype, "sector", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'functionLocal'
    }),
    (0, typeorm_1.Column)({ length: 100, nullable: false }),
    __metadata("design:type", String)
], Events.prototype, "functionLocal", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'tipo'
    }),
    (0, typeorm_1.Column)({ name: 'typeId', nullable: false }),
    __metadata("design:type", Number)
], Events.prototype, "typeId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => types_entity_1.Types, { eager: true, cascade: true }),
    (0, typeorm_1.JoinColumn)({ name: 'typeId', referencedColumnName: 'id' }),
    __metadata("design:type", types_entity_1.Types)
], Events.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: false
    }),
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", Boolean)
], Events.prototype, "situation", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'se o status for inativo tem que ter motivo '
    }),
    (0, typeorm_1.Column)({ length: 100, nullable: false }),
    __metadata("design:type", String)
], Events.prototype, "motivo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 85
    }),
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", Number)
], Events.prototype, "protocol", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: ''
    }),
    (0, typeorm_1.Column)("int", { array: true }),
    __metadata("design:type", Array)
], Events.prototype, "latitude", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: []
    }),
    (0, typeorm_1.Column)("int", { array: true }),
    __metadata("design:type", Array)
], Events.prototype, "longitude", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 345345
    }),
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", Number)
], Events.prototype, "azimuth", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], Events.prototype, "create_at", void 0);
__decorate([
    (0, UpdateDateColumn_1.UpdateDateColumn)({ name: 'update_at', nullable: false }),
    (0, class_transformer_1.Exclude)({ toPlainOnly: false }),
    __metadata("design:type", Date)
], Events.prototype, "update_at", void 0);
exports.Events = Events = __decorate([
    (0, typeorm_1.Entity)()
], Events);
//# sourceMappingURL=events.entity.js.map