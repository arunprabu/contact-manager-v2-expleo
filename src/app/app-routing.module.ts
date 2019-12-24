import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DemoComponent } from './demo/demo.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AddContactComponent } from './contacts/add-contact/add-contact.component';
import { ContactDetailsComponent } from './contacts/contact-details/contact-details.component';

// setting up routes
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'demo', component: DemoComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'contacts/add', component: AddContactComponent },
  { path: 'contacts/1', component: ContactDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // register the route config
  exports: [RouterModule]
})
export class AppRoutingModule { }
