import { Router } from "express";
import { FeedbackController } from "./feedback/feedback.controller";
import { CreateFeedbackUseCase } from "./feedback/use-cases/create-feedback/create-feedback.use-case";
import { CreateFeedbackRepository } from "./feedback/repositories/create-feedback/create-feedback.repository";

const repository = new CreateFeedbackRepository();
const useCase = new CreateFeedbackUseCase(repository);

const routes = Router();
routes.post("/feedbacks", (req, res) => new FeedbackController(useCase).handle(req, res));

export { routes };