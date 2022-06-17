import { Router } from "express";
import { FeedbackController } from "./feedback/feedback.controller";
import { CreateFeedbackUseCase } from "./feedback/use-cases/create-feedback/create-feedback.use-case";
import { CreateFeedbackRepository } from "./feedback/repositories/create-feedback/create-feedback.repository";
import { prisma } from "./prisma";
import { GetFeedbacksRepository } from "./feedback/repositories/get-feedbacks/get-feedbacks.repository";
import { GetFeedbacksUseCase } from "./feedback/use-cases/get-feedbacks/get-feedbacks.use-case";

const createFeedbackRepository = new CreateFeedbackRepository(prisma);
const createFeedbackUseCase = new CreateFeedbackUseCase(
  createFeedbackRepository
);
const getFeedbacksRepository = new GetFeedbacksRepository(prisma);
const getFeedbacksUseCase = new GetFeedbacksUseCase(getFeedbacksRepository);

const controller = new FeedbackController(
  createFeedbackUseCase,
  getFeedbacksUseCase
);

const routes = Router();
routes.post("/feedbacks", (req, res) => controller.post(req, res));
routes.get("/feedbacks", (req, res) => controller.get(req, res));

export { routes };
