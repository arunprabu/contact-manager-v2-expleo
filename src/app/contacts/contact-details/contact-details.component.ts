import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContactFormComponent } from '../contact-form/contact-form.component';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {

  contactData: any;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.contactData = {
        name: 'arun', phone: 1233, email: 'a@b.com'
    };
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ContactFormComponent, {
      width: '1000px',
      data: JSON.parse(JSON.stringify(this.contactData))
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      console.log('The dialog was closed');
      this.contactData = result;
    });
  }

}
