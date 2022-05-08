import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';


import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { ContactComponent } from './contact/contact.component';
import { CarouselComponent } from 'angular-bootstrap-md';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component:  HomeComponent},
  { path: 'shop', component:  ShopComponent},
  { path: 'contact', component:  ContactComponent},
  { path: 'carousel', component:  CarouselComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes),CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
