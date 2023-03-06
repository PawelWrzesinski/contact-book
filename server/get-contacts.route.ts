import { Request, Response } from 'express';
import { Contact } from './../src/app/model/contact';
import { CONTACTS } from "./db-data";

export function getAllContacts(req: Request, res: Response) {

    res.status(200).json(Object.values(CONTACTS));

}

export function getContactById(req: Request, res: Response) {
    const contactId = +req.params['id'];

    const contacts: Contact[] = Object.values(CONTACTS);

    const contact = contacts.filter(contact => contact.id == contactId);

    res.status(200).json(contact);
}

export function getContactByFirstNameAndLastName(
    req: Request, res: Response) {

    const contactFirstName = req.params['firstName'].toLowerCase();

    const contactLastName = req.params['lastName'].toLowerCase();

    const contacts: Contact[] = Object.values(CONTACTS);

    const contact = contacts.filter(contact => contact.firstName.toLowerCase().includes(contactFirstName) && contact.lastName.toLowerCase().includes(contactLastName));

    res.status(200).json(contact);
}
