import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Contact } from './contact';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  REST_API_URL = 'https://jsonplaceholder.typicode.com/users/';

  constructor(private http: HttpClient) { }

  // 1. get data from comp
  createContact(contactData: Contact): Promise<Contact> {
    console.log(contactData);

    // 2. send data to rest api
    // 2.1 identify the REST API URL https://jsonplaceholder.typicode.com/users
    // 2.2. Http Method: POST

    const createContactPromise = new Promise((resolve, reject) => {
      this.http.post(this.REST_API_URL, contactData)
        .toPromise()
        .then((res: Contact) => {
          console.log(res);
          resolve(res);
        })
        .catch((err: any) => {
          console.log(err);
          reject(err);
        })
        .finally(() => {
          console.log('Its Over');
        });
    });

    return createContactPromise as Promise<Contact>;
  }

  getContacts(): Observable<Contact[]> {
    return this.http.get(this.REST_API_URL)
      .pipe(map((res: Contact[]) => {
        console.log(res);
        return res;
      }));
  }

  getContactById(id: string): Observable<Contact> {
    console.log(id);
    const CONTACT_DETAILS_URL = this.REST_API_URL + id;
    return this.http.get(CONTACT_DETAILS_URL)
      .pipe(map((res: Contact) => {
        console.log(res);
        return res;
      }));
  }

  updateContact(updateableContactData) {
    console.log(updateableContactData);

    const updateContactPromise = new Promise((resolve, reject) => {
      this.http.put(this.REST_API_URL + updateableContactData.id, updateableContactData)
        .toPromise()
        .then((res: any) => {
          console.log(res);
          resolve(res);
        })
        .catch((err: any) => {
          console.log(err);
          reject(err);
        })
        .finally(() => {
          console.log('Its Over');
        });
    });

    return updateContactPromise as Promise<any>;

  }

  


}
