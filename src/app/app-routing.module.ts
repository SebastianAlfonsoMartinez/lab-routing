import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './navbar/about-us/about-us.component';
import { ContactComponent } from './navbar/contact/contact.component';
import { HomeComponent } from './navbar/home/home.component';
import { NotFoundComponent } from './navbar/not-found/not-found.component';
import { ViewComponent } from './navbar/view/view.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'aboutUs',
    component: AboutUsComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'view/:id',
    component: ViewComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
