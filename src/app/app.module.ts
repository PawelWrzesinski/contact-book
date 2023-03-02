import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ContactsWallComponent } from './contacts/contacts-wall/contacts-wall.component';
import { ContactsSaveEditComponent } from './contacts/contacts-save-edit/contacts-save-edit.component';
import { AppRoutingModule } from './app-routing.module';
import { ContactComponent } from './contacts/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactsWallComponent,
    ContactsSaveEditComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
