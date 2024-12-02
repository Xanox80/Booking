import {
  Controller,
  Get,
  Post,
  Body,
  Delete,
  HttpStatus,
  Param,
  Query,
  NotFoundException,
} from '@nestjs/common';
import { BookingService } from './booking.service';
import { BookingDto } from './dto/booking.dto';
import { HttpCode } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { BookingResponseDto } from './dto';
import { Booking } from '@prisma/client';

@Controller('booking')
export class BookingController {
  constructor(private bookingService: BookingService) {}

  @ApiOperation({ description: 'Create a new booking' })
  @HttpCode(HttpStatus.OK)
  @Post('createBooking')
  async createBooking(@Body() bookingDto: BookingDto) {
    return this.bookingService.createBooking(bookingDto);
  }

  @ApiOperation({ description: 'Get information about all bookings' })
  @HttpCode(HttpStatus.OK)
  @ApiResponse({ description: 'Returns statistics of bookings' })
  @Get('getAllBookings')
  async getAllBookings() {
    return this.bookingService.getAllBookings();
  }

  @ApiOperation({ description: 'Get information about booking' })
  @HttpCode(HttpStatus.OK)
  @ApiResponse({ description: 'Returns statistics of booking' })
  @Get(':id')
  async getBookingById(@Param('id') id: string): Promise<Booking> {
    const booking = await this.bookingService.getBookingsById(id);

    if (!booking) {
      throw new NotFoundException(`Booking with id ${id} not found`);
    }

    return booking;
  }

  @ApiOperation({ description: 'Delete a booking' })
  @HttpCode(HttpStatus.OK)
  @ApiResponse({ type: BookingResponseDto })
  @Delete('deleteBooking')
  async deleteBooking(@Query('id') id: string): Promise<BookingResponseDto> {
    const bookingDelete = await this.bookingService.deleteBooking(id);
    if (!bookingDelete) {
      throw new NotFoundException(`Booking with id ${id} not found`);
    }
    return bookingDelete;
  }
}
