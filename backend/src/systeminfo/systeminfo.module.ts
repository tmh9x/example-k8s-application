import { Module } from '@nestjs/common';
import * as si from 'systeminformation';

@Module({
    providers: [{
        provide: 'SYSTEM_INFORMATION',
        useValue: si
    }],
    exports: ['SYSTEM_INFORMATION']
}
)
export class SysteminfoModule { }
