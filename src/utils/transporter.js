import nodemailer from 'nodemailer';
import {
    MAIL_SERVICE,
    MAIL_HOST,
    MAIL_PORT,
    MAIL_USER,
    MAIL_PASSWORD,
} from '../config/index.js';

export const transporter = nodemailer.createTransport({
    service: MAIL_SERVICE,
    host: MAIL_HOST,
    port: MAIL_PORT,
    secure: true,
    requireTLS: true,
    ignoreTLS: false,
    auth: {
        user: MAIL_USER,
        pass: MAIL_PASSWORD,
    },
});