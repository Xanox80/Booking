import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';

export class BookingDto {
  @ApiProperty({ example: 'Bogdan' })
  @IsString()
  @IsNotEmpty()
  @Expose()
  user: string;

  @ApiProperty()
  @Expose()
  data: Date;

  @ApiProperty({ example: '09:00' })
  @IsString()
  @IsNotEmpty()
  startTime: string; // Changed to non-optional

  @ApiProperty({ example: '10:00' })
  @IsString()
  @IsNotEmpty()
  endTime: string;
}
