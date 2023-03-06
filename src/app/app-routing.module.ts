import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactDetailComponent } from './contacts/contact-detail/contact-detail.component';
import { ContactsEditResolverService } from './contacts/contact-edit-resolver.service';
import { ContactsSaveEditComponent } from './contacts/contacts-save-edit/contacts-save-edit.component';
import { ContactsWallComponent } from './contacts/contacts-wall/contacts-wall.component';

const routes: Routes = [
  { path: '', redirectTo: '/contacts', pathMatch: 'full' },
  {
    path: 'contacts',
    component: ContactsWallComponent,
    resolve: {
      // ContactsWallRe
    }
  },
  { path: 'contacts/new', component: ContactsSaveEditComponent },
  {
    path: 'contacts/:id', component: ContactDetailComponent,
    // resolve: [ContactsResolverService],
    resolve: {
      contact: ContactsEditResolverService
    }
  },
  {
    path: 'contacts/:id/edit',
    component: ContactsSaveEditComponent,
    // resolve: [ContactsResolverService],
    resolve: {
      contact: ContactsEditResolverService
    }
  },

  { path: 'contactsSaveEdit', component: ContactsSaveEditComponent }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
