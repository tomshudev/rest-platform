import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OrderPageComponent } from './order-page/order-page.component';
import { OrderPageSummarizeComponent } from './order-page-summarize/order-page-summarize.component';
import { HomePageNBComponent } from './home-page-nb/home-page-nb.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageNBComponent },
  { path: 'order', component: OrderPageComponent },
  { path: 'ordersum', component: OrderPageSummarizeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
