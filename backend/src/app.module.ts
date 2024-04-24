import { Module } from '@nestjs/common';

import { SysteminformationModule } from './systeminformation/systeminformation.module';
import { SysteminfoModule } from './systeminfo/systeminfo.module';
import { SysteminformationController } from './systeminformation/systeminformation.controller';
import { SysteminformationService } from './systeminformation/systeminformation.service';


@Module({
  imports: [SysteminformationModule, SysteminfoModule],
  controllers: [SysteminformationController],
  providers: [SysteminformationService],
})
export class AppModule { }
