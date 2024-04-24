import { Inject, Injectable } from '@nestjs/common';
import * as si from 'systeminformation';

@Injectable()
export class SysteminformationService {
  constructor(@Inject('SYSTEM_INFORMATION') private readonly systemInformation: typeof si) { }

  getSystem() {
    return this.systemInformation.system().then(data => {
      return data;
    });
  }

  getCpu() {
    return this.systemInformation.cpu().then(data => {
      return data;
    });
  }
  getMemory() {
    return this.systemInformation.mem().then(data => {
      return data;
    });
  }
  getOs() {
    return this.systemInformation.osInfo().then(data => {
      return data;
    });
  }

}
