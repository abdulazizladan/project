import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../../store/models/item.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input()
  public data: Item;

  @Output()
  purchaseEvent = new EventEmitter<string>();

  buyItem(){
    this.purchaseEvent.emit();
  }

  constructor() {
    this.data = {
      id : 0,
      name : "",
      description : "",
      price : 0
    };
   }

  ngOnInit(): void {
  }

}
