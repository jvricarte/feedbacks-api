import { Router } from "express";
import { FeedbackController } from "./feedback/feedback.controller";
import { CreateFeedbackUseCase } from "./feedback/use-cases/create-feedback/create-feedback.use-case";
import { CreateFeedbackRepository } from "./feedback/repositories/create-feedback/create-feedback.repository";

const repository = new CreateFeedbackRepository();
const useCase = new CreateFeedbackUseCase(repository);

const routes = Router();
console.log('repository => ', repository);
console.log('useCase => ', useCase);
routes.post("/feedbacks", new FeedbackController(useCase).handle);

export { routes };