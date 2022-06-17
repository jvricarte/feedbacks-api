import { PrismaClient } from "@prisma/client";
import { GetFeedbacksDto } from "../../dtos/get-feedbacks.dto";
import { GetFeedbacksRepositoryContract } from "./get-feedbacks.repository.contract";

export class GetFeedbacksRepository implements GetFeedbacksRepositoryContract {
  private prismaClient: PrismaClient;

  constructor(prismaClient: PrismaClient) {
    this.prismaClient = prismaClient;
  }

  async getFeedbacks(page: number, itemsPerPage: number): Promise<GetFeedbacksDto> {
    const items = await this.prismaClient.feedBack.findMany({
      take: itemsPerPage,
      skip: (page - 1) * itemsPerPage,
    });

    const totalItems = await this.prismaClient.feedBack.count();

    const response = {
      items,
      page,
      itemsPerPage,
      total: totalItems,
    }

    return response as GetFeedbacksDto;
  }
}