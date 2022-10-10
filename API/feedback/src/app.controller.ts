import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateFeedbackDto } from './feedback.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('feedbacks')
  getFeedbacks() {
    return this.appService.findFeedbacks()
  }

  @Post('createFeedback')
  @UsePipes(ValidationPipe)
  createUsers(@Body() createFeedbackDto: CreateFeedbackDto) {
    return this.appService.createFeedback(createFeedbackDto);
  }
}
