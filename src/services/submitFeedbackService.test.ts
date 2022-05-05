import { SubmitFeedbackService } from "./submitFeedbackService";


// Espições

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

 // Passando os objetos sem necessariamente estar utilizando as dependências
 const submitFeedback = new SubmitFeedbackService(
    { create: createFeedbackSpy},
    { sendMail: sendMailSpy}

)

describe('Submit feedback', () =>{

    // pode ser com it() no lugar de test()
    test('should be able to submit a feedback', async () => {
       
        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: 'example comment',
            screenshot: 'data:image/png;base64,asdasdasdas'
        })).resolves.not.toThrow();

        expect(createFeedbackSpy).toBeCalled()
        expect(sendMailSpy).toBeCalled()

    });


    test('should not be able submit feedback without type', async () => {
       
        await expect(submitFeedback.execute({
            type: '',
            comment: 'example comment',
            screenshot: 'data:image/png;base64,asdasdasdas'
        })).rejects.toThrow();
    });

    test('should not be able submit feedback without comment', async () => {
       
        await expect(submitFeedback.execute({
            type: 'test',
            comment: '',
            screenshot: 'data:image/png;base64,asdasdasdas'
        })).rejects.toThrow();
    });

    test('should not be able submit feedback with an invalid screenshot', async () => {
       
        await expect(submitFeedback.execute({
            type: 'test',
            comment: 'Está tudo bugado',
            screenshot: 'teste.jpg'
        })).rejects.toThrow();
    });
});