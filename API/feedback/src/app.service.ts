import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFeedbackDto } from './feedback.dto';
import { Feedback } from './feedback.enitity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Feedback) private readonly feedbackRepository: Repository<Feedback>,
  ) { }

  findFeedbacks() {
    return this.feedbackRepository.find()
  }

  createFeedback(createFeedbackDto: CreateFeedbackDto) {
    const newFeedback = this.feedbackRepository.create(createFeedbackDto);
    return this.feedbackRepository.save(newFeedback);
  }
}
