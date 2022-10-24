import { Module } from '@nestjs/common';
import { TransmissionService } from './transmission.service';
import { TransmissionController } from './transmission.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Transmission } from './entities/transmission.entity';

@Module({
  controllers: [TransmissionController],
  providers: [TransmissionService],
  imports: [TypeOrmModule.forFeature([Transmission])],
})
export class TransmissionModule {}
