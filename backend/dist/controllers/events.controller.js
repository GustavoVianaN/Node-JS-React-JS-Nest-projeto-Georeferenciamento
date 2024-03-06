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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventsController = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const events_entity_1 = require("../entities/events.entity");
const swagger_1 = require("@nestjs/swagger");
const nest_keycloak_connect_1 = require("nest-keycloak-connect");
const swagger_2 = require("@nestjs/swagger");
const nestjs_typeorm_paginate_1 = require("nestjs-typeorm-paginate");
const api_query_decorator_1 = require("../decorators/api-query.decorator");
const types_entity_1 = require("../entities/types.entity");
let EventsController = class EventsController {
    constructor(eventsRepository, typesRepository) {
        this.eventsRepository = eventsRepository;
        this.typesRepository = typesRepository;
    }
    async findAllSchedule(id, limit, filter, filterBy, page, orderBy, order) {
        const options = {
            page,
            limit: limit || 50,
        };
        const queryBuilder = this.eventsRepository.createQueryBuilder('events')
            .leftJoinAndSelect('events.type', 'type');
        if (filterBy != 'null' && filter != 'null') {
            if (filterBy == 'id') {
                filterBy = 'idDevice';
            }
            queryBuilder.where(`LOWER(CAST(${filterBy} AS TEXT)) LIKE LOWER('${filter}%')`);
        }
        queryBuilder.orderBy(`events.${orderBy || 'id'}`, order || 'ASC');
        return (0, nestjs_typeorm_paginate_1.paginate)(queryBuilder, options);
    }
    async findScheduleById(id) {
        const schedule = await this.eventsRepository
            .createQueryBuilder('events')
            .getOne();
        if (!schedule) {
            return { message: 'Agendamento não encontrado' };
        }
        return schedule;
    }
    async createSchedule(events) {
        console.log(events);
        return await this.eventsRepository.save(events);
    }
    async update(id, events) {
        return await this.eventsRepository.update(+id, events);
    }
    async remove(id) {
        return await this.eventsRepository.delete(+id);
    }
};
exports.EventsController = EventsController;
__decorate([
    (0, common_1.Get)(''),
    (0, nest_keycloak_connect_1.Roles)({ roles: ['Administrator', 'Operator'] }),
    (0, api_query_decorator_1.Apiquery)(),
    __param(0, (0, common_1.Query)('id')),
    __param(1, (0, common_1.Query)('limit')),
    __param(2, (0, common_1.Query)('filter')),
    __param(3, (0, common_1.Query)('filterBy')),
    __param(4, (0, common_1.Query)('page')),
    __param(5, (0, common_1.Query)('orderBy')),
    __param(6, (0, common_1.Query)('order')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, String, String, Number, String, String]),
    __metadata("design:returntype", Promise)
], EventsController.prototype, "findAllSchedule", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, nest_keycloak_connect_1.Roles)({ roles: ['Administrator', 'Operator'] }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], EventsController.prototype, "findScheduleById", null);
__decorate([
    (0, common_1.Post)(),
    (0, nest_keycloak_connect_1.Roles)({ roles: ['Administrator'] }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [events_entity_1.Events]),
    __metadata("design:returntype", Promise)
], EventsController.prototype, "createSchedule", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, nest_keycloak_connect_1.Roles)({ roles: ['Administrator'] }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, events_entity_1.Events]),
    __metadata("design:returntype", Promise)
], EventsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, nest_keycloak_connect_1.Roles)({ roles: ['Administrator'] }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], EventsController.prototype, "remove", null);
exports.EventsController = EventsController = __decorate([
    (0, swagger_2.ApiBearerAuth)(),
    (0, swagger_1.ApiTags)('Events'),
    (0, common_1.Controller)('api/events'),
    (0, nest_keycloak_connect_1.Resource)('portal-api'),
    __param(0, (0, typeorm_1.InjectRepository)(events_entity_1.Events)),
    __param(1, (0, typeorm_1.InjectRepository)(types_entity_1.Types)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], EventsController);
//# sourceMappingURL=events.controller.js.map