import { FeedbackDto } from "./feedback.dto"

export type GetFeedbacksDto = {
  items: FeedbackDto[];
  page: number;
  itemsPerPage: number;
  total: number;
}