import { Injectable, BadRequestException } from '@nestjs/common';
import { BookingDto } from './dto/booking.dto';
import { BookingRepository } from 'src/repository/repositories/booking.repository';
import { Booking } from '@prisma/client';

@Injectable()
export class BookingService {
  constructor(private bookingRepository: BookingRepository) {}

  private validateBookingTimes(startTime: string, endTime: string): void {
    const start = new Date(`1970-01-01T${startTime}`);
    const end = new Date(`1970-01-01T${endTime}`);

    if (start >= end) {
      throw new BadRequestException('startTime must be earlier than endTime.');
    }

    if (start.toDateString() !== end.toDateString()) {
      throw new BadRequestException(
        'startTime and endTime must be within the same day.',
      );
    }
  }

  async createBooking(dto: BookingDto): Promise<any> {
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

  async getBookingsById(id: string): Promise<Booking | null> {
    return this.bookingRepository.getBookingById(id);
  }

  async deleteBooking(id: string): Promise<Booking> {
    return this.bookingRepository.deleteBooking(id);
  }
}
