import { GetFeedbacksDto } from "../../dtos/get-feedbacks.dto";
import { GetFeedbacksRepositoryContract } from "../../repositories/get-feedbacks/get-feedbacks.repository.contract";
import { GetFeedbacksUseCaseContract } from "./get-feedbacks.use-case.contract";

export class GetFeedbacksUseCase implements GetFeedbacksUseCaseContract {
  private feedbackRepository: GetFeedbacksRepositoryContract;

  constructor(feedbackRepository: GetFeedbacksRepositoryContract) {
    this.feedbackRepository = feedbackRepository;
  }

  async execute(page: number, itemsPerPage: number): Promise<GetFeedbacksDto> {
    const feedbacks = await this.feedbackRepository.getFeedbacks(page, itemsPerPage);

    return feedbacks;
  }
}