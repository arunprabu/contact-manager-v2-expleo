import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ContactService } from '../contact.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  isSaved: boolean;

  // Step 1: Create FormGroup
  contactForm: FormGroup;

  // 1. connect to the service
  constructor( private contactService: ContactService, private _snackBar: MatSnackBar ) { }

  ngOnInit() {
    // Step 2: Instantiate it with object 
    this.contactForm = new FormGroup({
      // Step 3: Create FormControls
      name: new FormControl('arun', Validators.required), // Step 6: add validators
      email: new FormControl('a@b.com', [Validators.required,
                                  Validators.email]
                            ),
      phone: new FormControl('232345', Validators.required)
    });
  }

  async onCreateContact() {
    console.log(this.contactForm.value);
    // 2. pass the data to service
    const status: any = await this.contactService.createContact(this.contactForm.value);
    console.log(status);
    if (status && status.id) {
      this.isSaved = true;
    }
  }










  // getErrorMessage() {
  //   return this.contactForm.get('email').hasError('required') ? 
  //     'You must enter a value' :
  //       this.contactForm.get('email').hasError('email') ? 'Not a valid email' :
  //           '';
  // }

}
