import { Controller, Get } from '@nestjs/common';
import { EventPattern, MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';
import { CreateUserEvent } from './create-user-event';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @EventPattern('user_created')
  resolverCreateUser(data: CreateUserEvent) {
    this.appService.resolverCreateUser(data);
  }

  @MessagePattern({ cmd: 'get_analitycs' })
  getAnalitycs() {
    return this.appService.getAnalitycs();
  }
}
