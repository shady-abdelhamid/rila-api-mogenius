import { ApiProperty } from '@nestjs/swagger';
import { MinLength } from 'class-validator';
import { Status } from '../types/device-status.enum';

export class CreateDeviceDto {
  @ApiProperty()
  @MinLength(3)
  vendor: string;

  @ApiProperty({ enum: ['ONLINE', 'OFFLINE'] })
  status: Status;
}

export class UpdateDeviceDto {
  @ApiProperty()
  uid: string;

  @ApiProperty()
  @MinLength(3)
  vendor: string;

  @ApiProperty()
  updatedAt: string;

  @ApiProperty({ enum: ['ONLINE', 'OFFLINE'] })
  status: Status;
}
