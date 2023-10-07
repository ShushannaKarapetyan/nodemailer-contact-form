import dotenv from 'dotenv';
dotenv.config();

export const {
    PORT,
    APP_NAME,
    MAIL,
    MAIL_SERVICE,
    MAIL_HOST,
    MAIL_PORT,
    MAIL_USER,
    MAIL_PASSWORD,
} = process.env;
