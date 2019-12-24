import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  REST_API_URL = 'https://jsonplaceholder.typicode.com/users';

  constructor( private http: HttpClient) { }

  // 1. get data from comp
  createContact( contactData: any ) {
    console.log(contactData);

    // 2. send data to rest api
      // 2.1 identify the REST API URL https://jsonplaceholder.typicode.com/users
      // 2.2. Http Method: POST

    const createContactPromise = new Promise( (resolve, reject) =>{
      this.http.post(this.REST_API_URL, contactData)
            .toPromise()
            .then( ( res: any) => {
              console.log(res);
              resolve(res);
            })
            .catch( (err: any) => {
              console.log(err);
            })
            .finally( () =>{
              console.log('Its Over');
            });
    } );

    return createContactPromise;
  }

  getContacts() {
    return this.http.get(this.REST_API_URL)
      .pipe(map((res: any ) => {
        console.log(res);
        return res;
      }));
  }


}
