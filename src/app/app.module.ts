import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SearchComponent } from './components/search/search.component';
import { CalrouselComponent } from './components/calrousel/calrousel.component';
import { ProductComponent } from './components/product/product.component';
import { StarsComponent } from './components/stars/stars.component';
import { SichuanComponent } from './components/sichuan/sichuan.component';
import { ShanxiComponent } from './components/shanxi/shanxi.component';
import { MainComponent } from './components/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SearchComponent,
    CalrouselComponent,
    ProductComponent,
    StarsComponent,
    SichuanComponent,
    ShanxiComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
