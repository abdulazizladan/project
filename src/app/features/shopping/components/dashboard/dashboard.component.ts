import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PurchaseComponent } from '../purchase/purchase.component';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor( public dialog : MatDialog) {

  }

  ngOnInit(): void {

  }

  openPurchaseDialog() : void{
    const dialogRef = this.dialog.open(PurchaseComponent, { width : "800px"});
  }

}
