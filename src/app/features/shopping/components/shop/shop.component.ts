import { Component, OnInit } from '@angular/core';
import { PurchaseComponent } from '../purchase/purchase.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  constructor(public dialog : MatDialog) {

  }

  ngOnInit(): void {
  }

  openPurchaseDialog() : void{
    const dialogRef = this.dialog.open(PurchaseComponent, { width : "800px"});
  }

}
