import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/modules/material/material.module';
import { ContactsComponent } from './contacts/contacts.component';

import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { DemoComponent } from './demo/demo.component';
import { AddContactComponent } from './contacts/add-contact/add-contact.component';
import { ContactDetailsComponent } from './contacts/contact-details/contact-details.component';
import { ContactFormComponent } from './contacts/contact-form/contact-form.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    DemoComponent,
    AddContactComponent,
    ContactDetailsComponent,
    ContactFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  entryComponents: [ContactFormComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
