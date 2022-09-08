import { Status } from 'src/gateway/types/device-status.enum';
import { Column, Entity, ObjectIdColumn, PrimaryColumn } from 'typeorm';
import { Device } from './device.entity';

@Entity()
export class Gateway {
  @ObjectIdColumn()
  _id: string;

  @PrimaryColumn()
  serial: string;

  @Column()
  name: string;

  @Column()
  ipv4: string;

  @Column()
  devices: Device[];
}
