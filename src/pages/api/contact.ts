import { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  secure: false,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
} as any);

export default async (req: VercelRequest, res: VercelResponse) => {
  const { name, email, message } = req.body;
  await transporter.sendMail({
    from: `${name} <${process.env.MAIL_USER}>`,
    to: 'danielmesquitta123@gmail.com',
    subject: 'Mensagem do Contate-me',
    html: `
    <html>
      <body>
        <h1>${name} <${email}></h1>
        <p>${message}</p>
      </body>
    </html>
  `,
  });
  return res.status(200).json({ message: 'E-mail successfully sent' });
};
