import nodemailer from 'nodemailer';
import { StatusCodes } from 'http-status-codes';
import { Resend } from 'resend';
import { BadRequestError } from '../errors/index.js';

const resend = new Resend('re_SJYeUvjW_PGzbL7w6rtgNC6mm6nF4wN6Y');

const sendEmailEthereal = async (_req, res) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
      user: 'hanna.mertz58@ethereal.email',
      pass: 'zqEAPh9y3yDcfWx25g',
    },
  });

  const info = await transporter.sendMail({
    from: '"SOFIP" <sofip@gmail.com>',
    to: 'bar@example.com',
    subject: 'Hello ✔',
    html: '<h2>Sending Emails with Node.js</h2>',
  });

  res.json(info);
};

const sendEmail = async (_req, res) => {
  const { data, error } = await resend.emails.send({
    from: 'Resend <onboarding@resend.dev>',
    to: ['thomas_3004@hotmail.fr'],
    subject: 'Hello World',
    html: '<strong>Ça fonctionne !</strong>',
  });

  if (error) {
    throw new BadRequestError(error.message);
  }

  res.status(StatusCodes.OK).json({ data });
};

export { sendEmail, sendEmailEthereal };
