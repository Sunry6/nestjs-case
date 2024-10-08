import {
  BeforeApplicationShutdown,
  Injectable,
  OnApplicationBootstrap,
  OnModuleDestroy,
  OnModuleInit,
} from '@nestjs/common';
import { CreateCccDto } from './dto/create-ccc.dto';
import { UpdateCccDto } from './dto/update-ccc.dto';

@Injectable()
export class CccService
  implements
    OnModuleInit,
    OnApplicationBootstrap,
    OnModuleDestroy,
    BeforeApplicationShutdown
{
  onModuleInit() {
    console.log('service has been initialized.');
  }

  onApplicationBootstrap() {
    console.log('service has been bootstrapped.');
  }

  onModuleDestroy() {
    console.log('service has been destroyed.');
  }

  beforeApplicationShutdown(signal?: string) {
    console.log('service is about to be shut down.');
  }

  create(createCccDto: CreateCccDto) {
    return 'This action adds a new ccc';
  }

  findAll() {
    return `This action returns all ccc`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ccc`;
  }

  update(id: number, updateCccDto: UpdateCccDto) {
    return `This action updates a #${id} ccc`;
  }

  remove(id: number) {
    return `This action removes a #${id} ccc`;
  }
}
