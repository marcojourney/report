import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  @MessagePattern({cmd: 'get_books_report'})
  findOne() {
    return 'return get book report';
  }

  @MessagePattern({cmd: 'get_orders_report'})
  findAll() {
    return 'return get order report';
  }
}
