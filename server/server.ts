import * as express from 'express';
import { getAllContacts, getContactByFirstNameAndLastName } from './get-contacts.route';

const cors = require('cors');

const bodyParser = require('body-parser');

const app = express();

app.use(cors({ origin: true }));

app.use(bodyParser.json());

app.route('/api/contacts').get(getAllContacts);

app.route('/api/contacts/:firstName&:lastName').get(getContactByFirstNameAndLastName);

// app.route();


const port = 9001;

const httpServer = app.listen(port, () => {
    console.log(`HTTP REST API SERVER running at http:localhost:${port}`);
});