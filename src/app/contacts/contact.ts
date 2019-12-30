export interface IContact {
    contactId: number;
    name: string;
    email: string;
    phone: string;
}

export class Contact implements IContact {
    contactId: number;
    name: string;
    email: string;
    phone: string;
}
