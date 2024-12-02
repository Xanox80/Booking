import { Booking } from '@prisma/client';
export declare class BookingResponseDto {
    user: string;
    startTime: string;
    endTime: string;
    static mapFrom(data: Booking): BookingResponseDto;
    static mapFromMulti(data: Booking[]): BookingResponseDto[];
}
