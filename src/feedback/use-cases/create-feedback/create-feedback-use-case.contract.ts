import { Feedback } from "../../domain/feedback.entity";
import { FeedbackDto } from "../../dtos/feedback.dto";

export interface CreateFeedbackUseCaseContract {
  execute: (feedback: FeedbackDto) => Promise<Feedback>;
}