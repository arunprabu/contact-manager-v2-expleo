import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContactService } from '../contact.service';
import { ActivatedRoute } from '@angular/router';
import { EditContactDialogComponent } from './edit-contact-dialog/edit-contact-dialog.component';
import { Contact } from '../contact';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {

  contactData: Contact;
  contactId: string;

  constructor( private contactService: ContactService, 
    private activatedRoute: ActivatedRoute, 
    public dialog: MatDialog ) { }

  ngOnInit() {
    // ideal place for ajax calls
    // reading url params in angular 8
    this.contactId = this.activatedRoute.snapshot.paramMap.get('id');
    this.getContactData();
  }

  openEditDialog() {
    // open angular material dialog 
    const dialogRef = this.dialog.open(EditContactDialogComponent, {
        width: '400px',
        data: JSON.parse(JSON.stringify(this.contactData))
      });

    dialogRef.afterClosed().subscribe(async updatedContactData => {
      console.log(updatedContactData);
      // 1. pass the data to service
      var status: any = await this.contactService.updateContact(updatedContactData)
      // 2. get the resp from service 
      console.log('The dialog was closed');
      // calling the util method to get the data afresh
      // as the status will not have the Contact data
      this.getContactData();
    });

  }

  getContactData() {
    // 1. connect to service and send req
    this.contactService.getContactById( this.contactId )
      .subscribe( (res: Contact) => { // 2. get the resp from service
        console.log( res );
        this.contactData = res;
      });
  }


}
