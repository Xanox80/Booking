"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepositoryModule = void 0;
const config_1 = require("@nestjs/config");
const prisma_service_1 = require("../../prisma/prisma.service");
const repositories_1 = require("./repositories");
const common_1 = require("@nestjs/common");
const booking_repository_1 = require("./repositories/booking.repository");
const providers = [
    prisma_service_1.PrismaService,
    config_1.ConfigService,
    repositories_1.UserRepository,
    booking_repository_1.BookingRepository,
];
let RepositoryModule = class RepositoryModule {
};
exports.RepositoryModule = RepositoryModule;
exports.RepositoryModule = RepositoryModule = __decorate([
    (0, common_1.Module)({
        imports: [],
        controllers: [],
        providers,
        exports: [...providers],
    })
], RepositoryModule);
//# sourceMappingURL=repository.module.js.map