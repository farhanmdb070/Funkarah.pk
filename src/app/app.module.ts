import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatSliderModule} from '@angular/material/slider';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { ContactComponent } from './contact/contact.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { CarouselModule, WavesModule, ButtonsModule, IconsModule } from 'angular-bootstrap-md'
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';



import { CarouselComponent } from './carousel/carousel.component';
import { FooterComponent } from './footer/footer.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShopComponent,
    ContactComponent,
    CarouselComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    ButtonsModule, IconsModule,
    MatDividerModule,




    MDBBootstrapModule.forRoot(),
    CarouselModule, WavesModule,
    MdbCarouselModule,

   

    NgbModule

    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
