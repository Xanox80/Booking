import { ConfigService } from '@nestjs/config';
import { PrismaService } from 'prisma/prisma.service';
import { UserRepository } from './repositories';
import { Module } from '@nestjs/common';
import { BookingRepository } from './repositories/booking.repository';

const providers = [
  PrismaService,
  ConfigService,
  UserRepository,
  BookingRepository,
];
@Module({
  imports: [],
  controllers: [],
  providers,
  exports: [...providers],
})
export class RepositoryModule {}
