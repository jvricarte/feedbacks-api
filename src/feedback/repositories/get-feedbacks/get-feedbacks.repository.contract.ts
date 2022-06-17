import { GetFeedbacksDto } from "../../dtos/get-feedbacks.dto";

export interface GetFeedbacksRepositoryContract {
  getFeedbacks(page: number, itemsPerPage: number): Promise<GetFeedbacksDto>;
}