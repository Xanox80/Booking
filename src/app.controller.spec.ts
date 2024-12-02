// booking.repository.spec.ts
import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../prisma/prisma.service';

import { BadRequestException } from '@nestjs/common';
import { BookingRepository } from './repository/repositories/booking.repository';

// Mocking PrismaService
const mockPrismaService = {
  booking: {
    findFirst: jest.fn(),
    create: jest.fn(),
    findMany: jest.fn(),
    findUnique: jest.fn(),
    delete: jest.fn(),
  },
};

describe('BookingRepository', () => {
  let bookingRepository: BookingRepository;
  let prismaService: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BookingRepository,
        {
          provide: PrismaService,
          useValue: mockPrismaService,
        },
      ],
    }).compile();

    bookingRepository = module.get<BookingRepository>(BookingRepository);
    prismaService = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(bookingRepository).toBeDefined();
  });

  describe('createBooking', () => {
    it('should create a booking successfully if no conflict exists', async () => {
      mockPrismaService.booking.findFirst.mockResolvedValue(null);
      mockPrismaService.booking.create.mockResolvedValue({
        id: '1',
        user: 'John',
        data: new Date(),
        startTime: new Date(),
        endTime: new Date(),
      });

      const result = await bookingRepository.createBooking({
        user: 'John',
        data: new Date(),
        startTime: '09:00',
        endTime: '10:00',
      });

      expect(result).toHaveProperty('id');
      expect(prismaService.booking.findFirst).toHaveBeenCalledWith(
        expect.any(Object),
      );
      expect(prismaService.booking.create).toHaveBeenCalledWith(
        expect.any(Object),
      );
    });

    it('should throw BadRequestException if a conflict exists', async () => {
      mockPrismaService.booking.findFirst.mockResolvedValue({
        id: '1',
        user: 'John',
        data: new Date(),
        startTime: new Date(),
        endTime: new Date(),
      });

      await expect(
        bookingRepository.createBooking({
          user: 'John',
          data: new Date(),
          startTime: '09:00',
          endTime: '10:00',
        }),
      ).rejects.toThrow(BadRequestException);

      expect(prismaService.booking.findFirst).toHaveBeenCalledWith(
        expect.any(Object),
      );
    });
  });

  describe('getAllBookings', () => {
    it('should return an array of bookings', async () => {
      mockPrismaService.booking.findMany.mockResolvedValue([
        {
          id: '1',
          user: 'John',
          data: new Date(),
          startTime: new Date(),
          endTime: new Date(),
        },
      ]);

      const result = await bookingRepository.getAllBookings();
      expect(result).toBeInstanceOf(Array);
      expect(result[0]).toHaveProperty('user');
    });
  });

  describe('getBookingById', () => {
    it('should return a booking if found', async () => {
      mockPrismaService.booking.findUnique.mockResolvedValue({
        id: '1',
        user: 'John',
        data: new Date(),
        startTime: new Date(),
        endTime: new Date(),
      });

      const result = await bookingRepository.getBookingById('1');
      expect(result).toHaveProperty('id', '1');
    });

    it('should return null if not found', async () => {
      mockPrismaService.booking.findUnique.mockResolvedValue(null);

      const result = await bookingRepository.getBookingById('1');
      expect(result).toBeNull();
    });
  });

  describe('deleteBooking', () => {
    it('should delete a booking and return it', async () => {
      mockPrismaService.booking.delete.mockResolvedValue({
        id: '1',
        user: 'John',
        data: new Date(),
        startTime: new Date(),
        endTime: new Date(),
      });

      const result = await bookingRepository.deleteBooking('1');
      expect(result).toHaveProperty('id', '1');
    });
  });
});
