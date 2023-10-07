import express from 'express';
import {PORT} from './config/index.js';
import {ContactsController} from './controllers/contacts.controller.js';
import {contactDataValidateSchemaBased} from './validators/contactValidator.js';
import { validationResult } from 'express-validator';

const app = express();
app.use(express.json());

app.post('/contact-us', contactDataValidateSchemaBased, (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }

    const controller = new ContactsController();
    controller.contactUs(req, res);
});

app.listen(PORT || 3001, () => {
    console.log(`Server is listening on port ${PORT}`);
}).on('error', (error) => {
    if (error) {
        throw error;
    }
});
