import { BookingService } from './booking.service';
import { BookingDto } from './dto/booking.dto';
import { BookingResponseDto } from './dto';
import { Booking } from '@prisma/client';
export declare class BookingController {
    private bookingService;
    constructor(bookingService: BookingService);
    createBooking(bookingDto: BookingDto): Promise<any>;
    getAllBookings(): Promise<{
        id: string;
        user: string;
        data: Date;
        startTime: string;
        endTime: string;
    }[]>;
    getBookingById(id: string): Promise<Booking>;
    deleteBooking(id: string): Promise<BookingResponseDto>;
}
