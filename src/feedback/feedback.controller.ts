import { Request, Response } from "express";
import { CreateFeedbackUseCaseContract } from "./use-cases/create-feedback/create-feedback.use-case.contract";
import { FeedbackDto } from "./dtos/feedback.dto";
import { GetFeedbacksUseCaseContract } from "./use-cases/get-feedbacks/get-feedbacks.use-case.contract";

export class FeedbackController {
  private createFeedbackUseCase: CreateFeedbackUseCaseContract;
  private getFeedbacksUseCase: GetFeedbacksUseCaseContract;

  constructor(
    createFeedbackUseCase: CreateFeedbackUseCaseContract,
    getFeedbacksUseCase: GetFeedbacksUseCaseContract
  ) {
    this.createFeedbackUseCase = createFeedbackUseCase;
    this.getFeedbacksUseCase = getFeedbacksUseCase;
  }

  async post(request: Request, response: Response): Promise<Response> {
    try {
      const feedback = request.body as FeedbackDto;
      const result = await this.createFeedbackUseCase.execute(feedback);
      return response.status(201).json(result);
    } catch (error) {
      console.error(error);
      return response.status(400).json(error);
    }
  }

  async get(request: Request, response: Response): Promise<Response> {
    try {
      const { page, itemsPerPage } = request.query;

      const pageDefault = 1;
      const itemsPerPageDefault = 10;

      const feedbacks = await this.getFeedbacksUseCase.execute(
        Number(page) || pageDefault,
        Number(itemsPerPage) || itemsPerPageDefault
      );
      return response.status(200).json(feedbacks);
    } catch (error) {
      console.error(error);
      return response.status(400).json(error);
    }
  }
}
