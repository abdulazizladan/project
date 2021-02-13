import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Material modules
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';

//FlexModule
import { FlexLayoutModule } from '@angular/flex-layout';

import { ShoppingRoutingModule } from './shopping-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ItemComponent } from './components/item/item.component';
import { ItemsComponent } from './components/items/items.component';
import { PurchaseComponent } from './components/purchase/purchase.component';
import { CartComponent } from './components/cart/cart.component';
import { TrackComponent } from './components/track/track.component';
import { ShopComponent } from './components/shop/shop.component';


@NgModule({
  declarations: [DashboardComponent, ItemComponent, ItemsComponent, PurchaseComponent, CartComponent, TrackComponent, ShopComponent],
  imports: [
    CommonModule,
    ShoppingRoutingModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    FlexLayoutModule
  ]
})
export class ShoppingModule { }
