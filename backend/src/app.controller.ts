import { Controller, Get, Param, Post, Req, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response, Request } from 'express'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // @Get('TODO/:id')
  // getTODO(@Param('id') id: string) {
  //   return 'TODO\'s returned';
  // }

  // @Post('TODO/create')
  // createTODO(@Req() request: Request, @Res() response: Response) {
  //   response.status(201).send();
  // }
}
