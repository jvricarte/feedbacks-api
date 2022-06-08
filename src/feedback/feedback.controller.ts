import { Request, Response } from "express";
import { CreateFeedbackUseCaseContract } from "./use-cases/create-feedback/create-feedback.use-case.contract";
import { FeedbackDto } from "./dtos/feedback.dto";

export class FeedbackController {
  private createFeedbackUseCase: CreateFeedbackUseCaseContract;

  constructor(createFeedbackUseCase: CreateFeedbackUseCaseContract) {
    this.createFeedbackUseCase = createFeedbackUseCase;
  }

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const feedback = request.body as FeedbackDto;
      const result = await this.createFeedbackUseCase.execute(feedback);
      return response.status(201).json(result);
    } catch (error) {
      console.error(error);
      return response.status(400).json(error);
    }
  }
}
