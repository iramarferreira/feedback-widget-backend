import express from 'express';
import { NodemailerMailAdapter } from './adapters/nodemailer/nodemailerMailAdapter';
import { PrismaFeedbackRepository } from './repositories/prisma/prismaFeedbackRepository';
import { SubmitFeedbackService } from './services/submitFeedbackService';

export const routes = express.Router()


// rotas
// routes.get('/test', (req, res) => {
//     return res.send('Hello world')
// })
routes.post('/feedbacks', async (req, res) => {
    
    const {type, comment, screenshot} = req.body

    const prismaFeedbackRepository = new PrismaFeedbackRepository()
    const nodeMailAdapter = new NodemailerMailAdapter()

    const submitFeedbackService = new SubmitFeedbackService(
        prismaFeedbackRepository,
        nodeMailAdapter
    ) 



    await submitFeedbackService.execute({type, comment, screenshot})


    return res.status(201).send()
})