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
exports.UserRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../prisma/prisma.service");
const config_1 = require("../../config");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { atSecret, atSecretExpires, rtSecret, rtSecretExpires } = (0, config_1.getAuthSecret)();
let UserRepository = class UserRepository {
    findById(id) {
        throw new Error('Method not implemented.');
    }
    constructor(prisma) {
        this.prisma = prisma;
    }
    async register(data) {
        const { name, password, role = 'user' } = data;
        const check = await this.prisma.user.findFirst({
            where: { name: { equals: name } },
        });
        if (check) {
            throw new Error('User already exists');
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await this.prisma.user.create({
            data: { name, password: hashedPassword, role },
        });
        const tokenPair = await this.generateTokenPair({
            id: user.id,
        });
        const updatedUser = await this.prisma.user.update({
            where: { id: user.id },
            data: {
                access_token: tokenPair.access_token,
                refresh_token: tokenPair.refresh_token,
            },
        });
        return {
            ...updatedUser,
            access_token: tokenPair.access_token,
            refresh_token: tokenPair.refresh_token,
        };
    }
    async generateTokenPair(payload) {
        const access_token = jwt.sign(payload, atSecret, {
            expiresIn: atSecretExpires,
        });
        const refresh_token = jwt.sign(payload, rtSecret, {
            expiresIn: rtSecretExpires,
        });
        return { access_token, refresh_token };
    }
    async login(userParams) {
        const { name, password } = userParams;
        const user = await this.prisma.user.findFirst({
            where: {
                name: { equals: name },
            },
        });
        if (!user) {
            throw new common_1.NotFoundException('User not found!');
        }
        const match = await bcrypt.compare(password, user.password);
        if (match) {
            const tokenPair = await this.generateTokenPair({
                id: user.id,
                name: user.name,
            });
            await this.updateRtHash(user.id, tokenPair.refresh_token);
            return { ...user, ...tokenPair };
        }
        else {
            throw new common_1.UnauthorizedException('Email or password wrong!');
        }
    }
    async updateRtHash(userId, refresh_token) {
        const hashedRefreshToken = await bcrypt.hash(refresh_token, 10);
        await this.prisma.user.update({
            where: {
                id: userId,
            },
            data: {
                refresh_token: hashedRefreshToken,
            },
        });
    }
    async updateUserById(id, userParams) {
        try {
            const { name, password } = userParams;
            const user = await this.prisma.user.findUnique({
                where: {
                    id: id,
                },
            });
            if (!user) {
                throw new common_1.NotFoundException('User not found!');
            }
            const updatedUser = await this.prisma.user.update({
                where: {
                    id: id,
                },
                data: {
                    name,
                    password,
                },
            });
            return updatedUser;
        }
        catch (error) {
            throw new Error(`Failed to update user: ${error.message}`);
        }
    }
    async deleteUser(id) {
        return this.prisma.user.delete({
            where: {
                id,
            },
        });
    }
};
exports.UserRepository = UserRepository;
exports.UserRepository = UserRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UserRepository);
//# sourceMappingURL=user.repository.js.map