import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input()
  name: string = "";

  @Output()
  purchaseEvent = new EventEmitter<string>();

  buyItem(){
    this.purchaseEvent.emit();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
