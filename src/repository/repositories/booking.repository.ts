import { BadRequestException, Injectable } from '@nestjs/common';
import { Booking } from '@prisma/client';
import { PrismaService } from '../../../prisma/prisma.service';
import { BookingDto } from 'src/modules/booking';

@Injectable()
export class BookingRepository {
  constructor(private readonly prisma: PrismaService) {}

  // Метод для створення нового бронювання
  async createBooking(bookingDto: BookingDto): Promise<Booking> {
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
      throw new BadRequestException(
        'There is already a booking for the selected time range.',
      );
    }

    // Створення нового бронювання, якщо конфліктів немає
    return this.prisma.booking.create({
      data: {
        ...bookingDto,
      },
    });
  }
  // Метод для отримання всіх бронювань
  async getAllBookings(): Promise<Booking[]> {
    return this.prisma.booking.findMany();
  }
  // Метод для отримання бронювання за ідентифікатором
  async getBookingById(id: string): Promise<Booking | null> {
    return this.prisma.booking.findUnique({ where: { id } });
  }
  // Метод для видалення бронювання
  async deleteBooking(id: string): Promise<Booking> {
    return this.prisma.booking.delete({
      where: {
        id,
      },
    });
  }
}
