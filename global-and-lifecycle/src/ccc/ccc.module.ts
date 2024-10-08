import {
  BeforeApplicationShutdown,
  Module,
  OnApplicationBootstrap,
  OnApplicationShutdown,
  OnModuleDestroy,
  OnModuleInit,
} from '@nestjs/common';
import { CccService } from './ccc.service';
import { CccController } from './ccc.controller';
import { ModuleRef } from '@nestjs/core';

@Module({
  controllers: [CccController],
  providers: [CccService],
})
export class CccModule
  implements
    OnModuleInit,
    OnApplicationBootstrap,
    OnModuleDestroy,
    BeforeApplicationShutdown,
    OnApplicationShutdown
{
  constructor(private moduleRef: ModuleRef) {}

  onModuleInit() {
    console.log('CccModule has been initialized.');
  }

  onApplicationBootstrap() {
    console.log('CccModule has been bootstrapped.');
  }

  onModuleDestroy() {
    console.log('CccModule has been destroyed.');
  }

  beforeApplicationShutdown(signal?: string) {
    console.log('CccModule is about to be shut down.');
  }

  onApplicationShutdown(signal?: string) {
    const cccService = this.moduleRef.get<CccService>(CccService);
    console.log('---------------- ', cccService.findAll());
    console.log('CccModule has been shut down.');
  }
}
