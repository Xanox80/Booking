import { BookingDto } from './dto/booking.dto';
import { BookingRepository } from 'src/repository/repositories/booking.repository';
import { Booking } from '@prisma/client';
export declare class BookingService {
    private bookingRepository;
    constructor(bookingRepository: BookingRepository);
    private validateBookingTimes;
    createBooking(dto: BookingDto): Promise<any>;
    getAllBookings(): Promise<{
        user: string;
        id: string;
        data: Date;
        startTime: string;
        endTime: string;
    }[]>;
    getBookingsById(id: string): Promise<Booking | null>;
    deleteBooking(id: string): Promise<Booking>;
}
