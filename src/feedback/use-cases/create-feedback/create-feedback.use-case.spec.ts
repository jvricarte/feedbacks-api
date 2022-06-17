import { FeedbackTypeEnum } from "../../../utils/enums/feedback-type.enum";
import { Feedback } from "../../domain/feedback.entity";
import { CreateFeedbackUseCase } from "./create-feedback.use-case";

const createFeedbackSpy = jest.fn(
  async (feedback: Feedback) => new Feedback(feedback)
);
const createFeedbackUseCaseMock = new CreateFeedbackUseCase({
  create: createFeedbackSpy,
});

describe("Create feedback", () => {
  it("Should be able to create a feedback", () => {
    expect(
      createFeedbackUseCaseMock.execute({
        type: FeedbackTypeEnum.BUG,
        description: "This is a bug",
      })
    ).resolves.not.toThrowError();
    expect(createFeedbackSpy).toHaveBeenCalled();
  });

  it("Should not be able to create a feedback without a valid type", () => {
    expect(
      createFeedbackUseCaseMock.execute({
        type: 5,
        description: "This is a bug",
      })
    ).rejects.toThrowError();
    expect(createFeedbackSpy).not.toHaveBeenCalled();
  });
});