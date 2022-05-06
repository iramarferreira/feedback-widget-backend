import { MailAdapter, SendEmailData } from "../mailAdapter";
import nodemailer from  'nodemailer';
import 'dotenv/config'


// Configurações para envio de email
const transport = nodemailer.createTransport({
    host: process.env.NODEMAILER_HOST,
    port: Number(process.env.NODEMAILER_PORT),
    auth: {
      user: process.env.NODEMAILER_USER,
      pass: process.env.NODEMAILER_PASS
    }
});

export class NodemailerMailAdapter implements MailAdapter{
    
    async sendMail({subject, body }: SendEmailData){
    
        await transport.sendMail({
            from: 'Equipe Feedget <oi@feedget.com>',
            to: 'Iramar Ferreira <iramarbsi@gmail.com>', 
            subject: subject,
            html: body,
        })
    };

}