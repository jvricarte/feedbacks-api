import { Feedback } from "../../domain/feedback.entity";
import { FeedbackDto } from "../../dtos/feedback.dto";
import { CreateFeedbackRepositoryContract } from "../../repositories/create-feedback/create-feedback.contract";
import { CreateFeedbackUseCaseContract } from "./create-feedback-use-case.contract";

export class CreateFeedbackUseCase implements CreateFeedbackUseCaseContract {
  private createFeedbackRepository: CreateFeedbackRepositoryContract
  constructor(createFeedbackRepository: CreateFeedbackRepositoryContract) {
    this.createFeedbackRepository = createFeedbackRepository;
  }

  async execute(feedback: FeedbackDto): Promise<Feedback> {
    if (feedback.type !== "BUG" && feedback.type !== "FEATURE") {
      throw new Error("Invalid feedback type");
    }
    const entity = new Feedback(feedback);
    return await this.createFeedbackRepository.create(entity);
  }
}
