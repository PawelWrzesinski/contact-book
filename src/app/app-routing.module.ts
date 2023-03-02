import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsSaveEditComponent } from './contacts/contacts-save-edit/contacts-save-edit.component';
import { ContactsWallComponent } from './contacts/contacts-wall/contacts-wall.component';

const routes: Routes = [
  { path: '', redirectTo: '/contacts', pathMatch: 'full' },
  { path: 'contacts', component: ContactsWallComponent },
  { path: 'contactsSaveEdit', component: ContactsSaveEditComponent }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
