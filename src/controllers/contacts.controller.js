import fs from 'fs';
import {fileURLToPath} from 'url';
import {dirname} from 'path';
import {transporter} from '../utils/transporter.js';
import {APP_NAME, MAIL} from '../config/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(dirname(__filename));

export class ContactsController {
    constructor() {
        this.transporter = transporter;
    }

    /**
     * Send contact info to via nodemailer
     *
     * @param req
     * @param res
     * @returns {Promise<*>}
     */
    async contactUs(req, res) {
        const {name, email, 'phone-number': phoneNumber, comment} = req.body;

        try {
            const htmlTemplate = fs.readFileSync(`${__dirname}/views/email_template.html`, 'utf-8');

            const mailOptions = {
                from: email,
                to: MAIL,
                subject: APP_NAME,
                html: htmlTemplate
                    .replace('{{name}}', name)
                    .replace('{{email}}', email)
                    .replace('{{phoneNumber}}', phoneNumber)
                    .replace('{{comment}}', comment)
            };

            const result = await this.transporter.sendMail(mailOptions);
            console.log("Message sent: %s", result.messageId);

            return res.status(200).json({success: true});
        } catch (e) {
            console.log(e.message)
        }
    }
}
