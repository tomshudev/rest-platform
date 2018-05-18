import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AppRoutingModule } from './/app-routing.module';
import { OrderPageComponent } from './order-page/order-page.component';
import { OrderMenuComponent } from './order-menu/order-menu.component';
import { OrderMenuItemComponent } from './order-menu-item/order-menu-item.component';
import { OrderMenuCategoryComponent } from './order-menu-category/order-menu-category.component';
import { DataService } from './services/data.service';
import { OrderMenuCategoryChooserComponent } from './order-menu-category-chooser/order-menu-category-chooser.component';
import { OrderMenuDetailsComponent } from './order-menu-details/order-menu-details.component';
import { CartService } from './services/cart.service';
import { OrderMenuDetailsCartComponent } from './order-menu-details-cart/order-menu-details-cart.component';
import { OrderMenuDetailsCartItemComponent } from './order-menu-details-cart-item/order-menu-details-cart-item.component';
import { Constants } from './services/constants.service';
import { OrderMenuHeaderComponent } from './order-menu-header/order-menu-header.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    OrderPageComponent,
    OrderMenuComponent,
    OrderMenuItemComponent,
    OrderMenuCategoryComponent,
    OrderMenuCategoryChooserComponent,
    OrderMenuDetailsComponent,
    OrderMenuDetailsCartComponent,
    OrderMenuDetailsCartItemComponent,
    OrderMenuHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    DataService,
    CartService,
    Constants
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
