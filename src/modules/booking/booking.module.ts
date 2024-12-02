import { RepositoryModule } from 'src/repository';
import { BookingService } from './booking.service';
import { Module } from '@nestjs/common';
import { BookingController } from './booking.controller';

const providers = [BookingService];
const imports = [RepositoryModule];

@Module({
  imports,
  controllers: [BookingController],
  providers,
  exports: providers,
})
export class BookingModule {}
