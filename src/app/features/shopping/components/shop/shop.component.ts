import { Component, OnInit } from '@angular/core';
import { PurchaseComponent } from '../purchase/purchase.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Item } from '../../store/models/item.model';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  public items: Item[];

  constructor(public dialog : MatDialog) {
    this.items = [
      {
        id: 0,
        name: "Cement",
        description: "Dangote premium cement",
        price: 1800
      },
      {
        id: 0,
        name: "Plywood",
        description: "Premium Birch wood sheets",
        price: 4500
      }
    ];
  }

  ngOnInit(): void {
  }

  openPurchaseDialog() : void{
    const dialogRef = this.dialog.open(PurchaseComponent, { width : "800px"});
  }

}
