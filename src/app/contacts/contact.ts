export interface IContact {
    id: number;
    name: string;
    email: string;
    phone: string;
}

export class Contact implements IContact {
    id: number;
    name: string;
    email: string;
    phone: string;
}
