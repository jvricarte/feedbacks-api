import { randomUUID } from "crypto";
import { FeedbackDto } from "../dtos/feedback.dto";

export class Feedback {
  id: string;
  type: number;
  description: string;

  constructor(data: FeedbackDto) {
    this.id = data.id || randomUUID();
    this.type = data.type;
    this.description = data.description;
  }
}