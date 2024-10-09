import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { name, email, message } = req.body;

        
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL_USER,  
                pass: process.env.EMAIL_PASS   
            }
        });

        try {
           
            await transporter.sendMail({
                from: `"${name}" <${email}>`, 
                to: process.env.RECEIVER_EMAIL, 
                subject: `Novo contato de ${name}`,
                text: message,
                html: `<p><strong>Nome:</strong> ${name}</p>
                       <p><strong>Email:</strong> ${email}</p>
                       <p><strong>Mensagem:</strong> ${message}</p>`,
            });

            res.status(200).json({ message: 'E-mail enviado com sucesso!' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro ao enviar e-mail.' });
        }
    } else {
        res.status(405).json({ message: 'Método não permitido.' });
    }
}
