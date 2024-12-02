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
exports.BookingController = void 0;
const common_1 = require("@nestjs/common");
const booking_service_1 = require("./booking.service");
const booking_dto_1 = require("./dto/booking.dto");
const common_2 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const dto_1 = require("./dto");
let BookingController = class BookingController {
    constructor(bookingService) {
        this.bookingService = bookingService;
    }
    async createBooking(bookingDto) {
        return this.bookingService.createBooking(bookingDto);
    }
    async getAllBookings() {
        return this.bookingService.getAllBookings();
    }
    async getBookingById(id) {
        const booking = await this.bookingService.getBookingsById(id);
        if (!booking) {
            throw new common_1.NotFoundException(`Booking with id ${id} not found`);
        }
        return booking;
    }
    async deleteBooking(id) {
        const bookingDelete = await this.bookingService.deleteBooking(id);
        if (!bookingDelete) {
            throw new common_1.NotFoundException(`Booking with id ${id} not found`);
        }
        return bookingDelete;
    }
};
exports.BookingController = BookingController;
__decorate([
    (0, swagger_1.ApiOperation)({ description: 'Create a new booking' }),
    (0, common_2.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.Post)('createBooking'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [booking_dto_1.BookingDto]),
    __metadata("design:returntype", Promise)
], BookingController.prototype, "createBooking", null);
__decorate([
    (0, swagger_1.ApiOperation)({ description: 'Get information about all bookings' }),
    (0, common_2.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiResponse)({ description: 'Returns statistics of bookings' }),
    (0, common_1.Get)('getAllBookings'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BookingController.prototype, "getAllBookings", null);
__decorate([
    (0, swagger_1.ApiOperation)({ description: 'Get information about booking' }),
    (0, common_2.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiResponse)({ description: 'Returns statistics of booking' }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BookingController.prototype, "getBookingById", null);
__decorate([
    (0, swagger_1.ApiOperation)({ description: 'Delete a booking' }),
    (0, common_2.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiResponse)({ type: dto_1.BookingResponseDto }),
    (0, common_1.Delete)('deleteBooking'),
    __param(0, (0, common_1.Query)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BookingController.prototype, "deleteBooking", null);
exports.BookingController = BookingController = __decorate([
    (0, common_1.Controller)('booking'),
    __metadata("design:paramtypes", [booking_service_1.BookingService])
], BookingController);
//# sourceMappingURL=booking.controller.js.map