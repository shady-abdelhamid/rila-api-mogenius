import {
  Body,
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateGatewayDto, UpdateGatewayDto } from './dtos/gateway.dto';
import { Gateway } from './models/gateway.entity';
import { GatewayService } from './gateway.service';
import { ApiParam, ApiTags } from '@nestjs/swagger';

@ApiTags('Gateway')
@Controller('gateway')
export class GatewayController {
  constructor(private gatewayService: GatewayService) {}

  @Get()
  getGateways(): Promise<any[]> {
    return this.gatewayService.getGateways();
  }

  @ApiParam({
    name: 'id',
    description: 'a UUID value',
  })
  @Get('/:id')
  getGateway(@Param('id', ParseUUIDPipe) uid: string): Promise<Gateway> {
    return this.gatewayService.getGateway(uid);
  }

  @Post()
  async createGateway(@Body() dto: CreateGatewayDto) {
    this.gatewayService.createGateway(dto);
  }

  @ApiParam({
    name: 'id',
    description: 'a UUID value',
  })
  @Patch('/:id')
  updateGateway(
    @Param('id', ParseUUIDPipe) serial: string,
    @Body() dto: UpdateGatewayDto,
  ): Promise<Gateway> {
    return this.gatewayService.updateGateway(serial, dto);
  }
}
