import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface ContactData {
  name: string;
  phone: string;
}

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styles: []
})
export class ContactFormComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ContactFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ContactData) {}

  ngOnInit() {
    console.log(this.data);
  }

  onNoClick(): void {
    this.dialogRef.close(this.data);
  }

}
