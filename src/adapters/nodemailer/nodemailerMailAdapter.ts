import { MailAdapter, SendEmailData } from "../mailAdapter";
import nodemailer from  'nodemailer';


// Configurações para envio de email
const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "99270771ec8e9c",
      pass: "2a3e0fc19a6abf"
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