import { prisma } from "../../../prisma";
import { Feedback } from "../../domain/feedback.entity";
import { CreateFeedbackRepositoryContract } from "./create-feedback.repository.contract";

export class CreateFeedbackRepository implements CreateFeedbackRepositoryContract {
  async create(data: Feedback): Promise<Feedback> {
    return await prisma.feedBack.create({
      data,
    });
  }
}
