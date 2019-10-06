import { Component, OnInit, EventEmitter, Output } from '@angular/core';

const leftItemsCount = 100;
const arrFlags = ['sun', 'heart', 'flower', 'flash'];

@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.scss']
})
export class LeftPanelComponent implements OnInit {

  @Output() clickActive = new EventEmitter<any>();

  leftItems: Item[] = new Array(leftItemsCount);

  constructor() { }

  ngOnInit() {

    for (let i = 0; i < leftItemsCount; i++) {
      const titleId = 'Item Left ' + i;
      const flags = Math.random() >= 0.5 ? 'armstrong@gmail.com' : 'jackson@gmail.com';
      this.leftItems[i] = new Item(titleId, flags);
    }
  }

  setOrder()  {
    
  }

  onClick(item) {
    this.clickActive.emit(item);
    console.log(item);
  }

}

class Item {
  title: string;
  notes: string;

  constructor(title: string, notes: string) {
    this.title = title;
    this.notes = notes;
  }
}
