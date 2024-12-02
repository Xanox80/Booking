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
exports.BookingService = void 0;
const common_1 = require("@nestjs/common");
const booking_repository_1 = require("../../repository/repositories/booking.repository");
let BookingService = class BookingService {
    constructor(bookingRepository) {
        this.bookingRepository = bookingRepository;
    }
    validateBookingTimes(startTime, endTime) {
        const start = new Date(`1970-01-01T${startTime}`);
        const end = new Date(`1970-01-01T${endTime}`);
        if (start >= end) {
            throw new common_1.BadRequestException('startTime must be earlier than endTime.');
        }
        if (start.toDateString() !== end.toDateString()) {
            throw new common_1.BadRequestException('startTime and endTime must be within the same day.');
        }
    }
    async createBooking(dto) {
        this.validateBookingTimes(dto.startTime, dto.endTime);
        return this.bookingRepository.createBooking({
            user: dto.user,
            startTime: dto.startTime,
            endTime: dto.endTime,
            data: dto.data,
        });
    }
    async getAllBookings() {
        return this.bookingRepository.getAllBookings();
    }
    async getBookingsById(id) {
        return this.bookingRepository.getBookingById(id);
    }
    async deleteBooking(id) {
        return this.bookingRepository.deleteBooking(id);
    }
};
exports.BookingService = BookingService;
exports.BookingService = BookingService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [booking_repository_1.BookingRepository])
], BookingService);
//# sourceMappingURL=booking.service.js.map