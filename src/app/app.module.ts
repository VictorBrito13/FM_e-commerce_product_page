import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { CartCardComponent } from './components/cart-card/cart-card.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { LightboxComponent } from './components/lightbox/lightbox.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CartCardComponent,
    ProductPageComponent,
    LightboxComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
