import { GetFeedbacksDto } from "../../dtos/get-feedbacks.dto";

export interface GetFeedbacksUseCaseContract {
  execute(page: number, itemsPerPage: number): Promise<GetFeedbacksDto>;
}