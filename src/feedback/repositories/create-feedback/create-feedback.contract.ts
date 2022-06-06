import { Feedback } from "../../domain/feedback.entity";

export interface CreateFeedbackRepositoryContract {
  create(feedback: Feedback): Promise<Feedback>;
}