import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { CreateGatewayDto, UpdateGatewayDto } from './dtos/gateway.dto';
import { Gateway } from './models/gateway.entity';
@Injectable()
export class GatewayService {
  constructor(
    @InjectRepository(Gateway)
    private gatewayRepository: MongoRepository<Gateway>,
  ) {}

  async getGateways(): Promise<Array<Gateway>> {
    return this.gatewayRepository.find();
  }

  async getGateway(serial: string): Promise<Gateway> {
    return this.gatewayRepository.findOne({
      where: { serial: serial },
    });
  }
  async createGateway({
    name,
    ipv4,
    devices,
  }: CreateGatewayDto): Promise<Gateway> {
    const gateway = this.gatewayRepository.create({
      serial: uuid(),
      name,
      ipv4,
      devices: devices.map((d) => {
        return {
          uid: uuid(),
          ...d,
          updatedAt: new Date().toISOString(),
        };
      }),
    });

    return this.gatewayRepository.save(gateway);
  }

  async updateGateway(
    serial: string,
    { name, ipv4, devices }: UpdateGatewayDto,
  ): Promise<Gateway> {
    let gateway = await this.getGateway(serial);

    gateway = {
      ...gateway,
      name,
      ipv4,
      devices: devices.map((d) => {
        return {
          ...d,
          updatedAt: new Date().toISOString(), // TODO: let date get updated only when there is a change
        };
      }),
    };
    return this.gatewayRepository.save(gateway);
  }
}
