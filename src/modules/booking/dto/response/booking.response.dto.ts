import { ApiProperty } from '@nestjs/swagger';
import { Booking } from '@prisma/client';
import { Expose, plainToClass } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';

export class BookingResponseDto {
  @ApiProperty({ example: 'Bogdan' })
  @IsString()
  @IsNotEmpty()
  @Expose()
  user: string;

  @ApiProperty({ example: '09:00' })
  @IsString()
  @IsNotEmpty()
  startTime: string; // Changed to non-optional

  @ApiProperty({ example: '10:00' })
  @IsString()
  @IsNotEmpty()
  endTime: string;

  public static mapFrom(data: Booking): BookingResponseDto {
    return plainToClass(BookingResponseDto, data, {
      excludeExtraneousValues: true,
    });
  }

  public static mapFromMulti(data: Booking[]): BookingResponseDto[] {
    return data.map(BookingResponseDto.mapFrom);
  }
}
