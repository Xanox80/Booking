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
exports.BookingRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../prisma/prisma.service");
let BookingRepository = class BookingRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createBooking(bookingDto) {
        const { data, startTime, endTime } = bookingDto;
        const conflictingBooking = await this.prisma.booking.findFirst({
            where: {
                data: data,
                OR: [
                    {
                        startTime: { lte: endTime },
                        endTime: { gte: startTime },
                    },
                ],
            },
        });
        if (conflictingBooking) {
            throw new common_1.BadRequestException('There is already a booking for the selected time range.');
        }
        return this.prisma.booking.create({
            data: {
                ...bookingDto,
            },
        });
    }
    async getAllBookings() {
        return this.prisma.booking.findMany();
    }
    async getBookingById(id) {
        return this.prisma.booking.findUnique({ where: { id } });
    }
    async deleteBooking(id) {
        return this.prisma.booking.delete({
            where: {
                id,
            },
        });
    }
};
exports.BookingRepository = BookingRepository;
exports.BookingRepository = BookingRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], BookingRepository);
//# sourceMappingURL=booking.repository.js.map