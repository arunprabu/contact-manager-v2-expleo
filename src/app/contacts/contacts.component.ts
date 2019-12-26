import { Component, OnInit, OnDestroy } from '@angular/core';
import { ContactService } from './contact.service';
import { Contact } from './contact';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styles: []
})
export class ContactsComponent implements OnInit, OnDestroy {

  contactList: Contact[];
  contactsSubscription: Subscription;

  constructor( private contactService: ContactService ) {
    console.log(' Inside Constructor');
  }

  ngOnInit() {
    console.log(' Inside ngOnInit');
    // ideal place for ajax calls
    this.contactsSubscription = this.contactService.getContacts()
      .subscribe( (res: Contact[]) => {
        console.log(res);
        this.contactList = res;
      });
  }

  ngOnDestroy() {
    console.log('Into Destroy Lifecycle hook');
    // ideal place for us to unsubscribe and empty the data
    this.contactsSubscription.unsubscribe();

    if (this.contactList && this.contactList.length > 0) {
      this.contactList.length = 0;
    }
  }


}
