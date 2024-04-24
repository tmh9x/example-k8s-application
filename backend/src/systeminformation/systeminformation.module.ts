import { Module } from '@nestjs/common';
import { SysteminformationService } from './systeminformation.service';
import { SysteminformationController } from './systeminformation.controller';
import * as si from 'systeminformation';

@Module({
  controllers: [SysteminformationController],
  providers: [SysteminformationService, { provide: 'SYSTEM_INFORMATION', useValue: si }],
  exports: ['SYSTEM_INFORMATION']
})
export class SysteminformationModule { }
