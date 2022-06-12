import { Injectable } from '@nestjs/common';
import { CreateUserEvent } from './create-user-event';

@Injectable()
export class AppService {
  private readonly analisis: any[] = [];
  getHello(): string {
    return 'Hello World!';
  }

  resolverCreateUser(data: CreateUserEvent) {
    console.log('HandlerUserCreate - ANILISIS', data);
    this.analisis.push({
      email: data.email,
      timestamp: new Date(),
    });
  }
}
