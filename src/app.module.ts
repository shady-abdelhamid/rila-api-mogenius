import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { GatewayModule } from './gateway/gateway.module';

TypeOrmModule.forRoot();
@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), GatewayModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
