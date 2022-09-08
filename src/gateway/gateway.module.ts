import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Gateway } from './models/gateway.entity';
import { GatewayService } from './gateway.service';
import { GatewayController } from './gateway.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Gateway])],
  providers: [GatewayService],
  controllers: [GatewayController],
})
export class GatewayModule {}
