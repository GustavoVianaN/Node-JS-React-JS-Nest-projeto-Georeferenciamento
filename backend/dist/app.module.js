"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const jwt_1 = require("@nestjs/jwt");
const nest_keycloak_connect_1 = require("nest-keycloak-connect");
const events_entity_1 = require("./entities/events.entity");
const axios_1 = require("@nestjs/axios");
const config_1 = require("@nestjs/config");
const events_controller_1 = require("./controllers/events.controller");
const types_entity_1 = require("./entities/types.entity");
const types_controller_1 = require("./controllers/types.controller");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            nest_keycloak_connect_1.KeycloakConnectModule.register({
                authServerUrl: "https://192.168.13.116:9998",
                "ssl-required": "external",
                resource: 'portal-api',
                "verify-token-audience": true,
                realm: 'ipms-dev',
                clientId: 'portal-api',
                secret: "DStrv7hapnwEI6NzOYGT0dfCiN58a6OK",
                'confidential-port': 0
            }),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: '192.168.13.116',
                port: 5432,
                username: 'postgres',
                password: 'sistemas',
                database: 'georeferenciamento',
                entities: [events_entity_1.Events, types_entity_1.Types],
                synchronize: true,
            }),
            jwt_1.JwtModule,
            typeorm_1.TypeOrmModule.forFeature([events_entity_1.Events, types_entity_1.Types]),
            axios_1.HttpModule,
            config_1.ConfigModule.forRoot({
                envFilePath: '.env',
            })
        ],
        controllers: [events_controller_1.EventsController, types_controller_1.TypesController],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map