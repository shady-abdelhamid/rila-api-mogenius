import { Column, Entity, PrimaryColumn } from 'typeorm';
import { Status } from '../types/device-status.enum';

@Entity()
export class Device {
  @PrimaryColumn()
  uid: string;

  @Column()
  vendor: string;

  @Column()
  updatedAt: string;

  @Column()
  status: Status;
}
