import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SysteminformationService } from './systeminformation.service';

@Controller('systeminformation')
export class SysteminformationController {
  constructor(private readonly systeminformationService: SysteminformationService) { }

  @Get('system')
  async getSystem() {
    return await this.systeminformationService.getSystem();
  }
  @Get('cpu')
  async getCpu() {
    return await this.systeminformationService.getCpu();
  }
  @Get('memory')
  async getMemory() {
    return await this.systeminformationService.getMemory();
  }

  @Get('os')
  async getOs() {
    return await this.systeminformationService.getOs();
  }

}
