import { prisma } from "../../prisma";
import { FeedbackCreateData, FeedbackRepository } from "../feedbackRepository";

export class PrismaFeedbackRepository implements FeedbackRepository{
    
    async create({type, comment, screenshot}: FeedbackCreateData) {
        await prisma.feedback.create({
            // data são os dados que quero criar
            // select é quais dados que quero retornar a nível do banco de dados recém criado
            data: {
                type: type,
                comment: comment,
                screenshot: screenshot
            }
        })
    };

    
}