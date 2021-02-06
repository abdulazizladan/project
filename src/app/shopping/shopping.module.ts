import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Material modules
import { MatToolbarModule } from '@angular/material/toolbar';

//FlexModule
import { FlexLayoutModule } from '@angular/flex-layout';

import { ShoppingRoutingModule } from './shopping-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ItemComponent } from './components/item/item.component';


@NgModule({
  declarations: [DashboardComponent, ItemComponent],
  imports: [
    CommonModule,
    ShoppingRoutingModule,
    MatToolbarModule,
    FlexLayoutModule
  ]
})
export class ShoppingModule { }
