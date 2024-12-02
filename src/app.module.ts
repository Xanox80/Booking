import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PrismaService } from 'prisma/prisma.service';
import { UserModule } from './modules/user';
import { BookingModule } from './modules/booking/booking.module';
import { HttpExceptionFilter } from './filters/http-exception.filter';

@Module({
  imports: [ConfigModule.forRoot(), UserModule, BookingModule],
  controllers: [],
  providers: [ConfigService, PrismaService, HttpExceptionFilter],
  exports: [ConfigService],
})
export class AppModule {}
