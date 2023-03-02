import { Request, Response } from 'express';
import { Contact } from './../src/app/model/contact';
import { CONTACTS } from "./db-data";
// import { Contact } from "src/app/model/contact";

export function getAllContacts(req: Request, res: Response) {

    res.status(200).json(Object.values(CONTACTS));

}

export function getContactByFirstNameAndLastName(
    req: Request, res: Response) {

    const contactFirstName = req.params['firstName'];

    const contactLastName = req.params['lastName'];

    const contacts: Contact[] = Object.values(CONTACTS);

    const contact = contacts.find(contact => contact.firstName == contactFirstName && contact.lastName == contactLastName);

    res.status(200).json(contact);
}
