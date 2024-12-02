import { Booking } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';
import { BookingDto } from 'src/modules/booking';
export declare class BookingRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    createBooking(bookingDto: BookingDto): Promise<Booking>;
    getAllBookings(): Promise<Booking[]>;
    getBookingById(id: string): Promise<Booking | null>;
    deleteBooking(id: string): Promise<Booking>;
}
