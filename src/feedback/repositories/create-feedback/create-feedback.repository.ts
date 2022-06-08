import { PrismaClient } from "@prisma/client";
import { Feedback } from "../../domain/feedback.entity";
import { CreateFeedbackRepositoryContract } from "./create-feedback.repository.contract";


export class CreateFeedbackRepository implements CreateFeedbackRepositoryContract {
  private prismaClient: PrismaClient;

  constructor(prismaClient: PrismaClient) {
    this.prismaClient = prismaClient;
  }

  async create(data: Feedback): Promise<Feedback> {
    return await this.prismaClient.feedBack.create({
      data,
    });
  }
}
