import { Component, OnInit } from '@angular/core';

const rightItemsCount = 100;
const arrFlags = ['sun', 'heart', 'flower', 'flash'];

@Component({
  selector: 'app-right-panel',
  templateUrl: './right-panel.component.html',
  styleUrls: ['./right-panel.component.scss']
})
export class RightPanelComponent implements OnInit {

  rightItems: Item[] = new Array(rightItemsCount);

  constructor() { }

  ngOnInit() {

    for (let i = 0; i < rightItemsCount; i++) {
      const titleId = 'Item Right ' + i;
      const flags = Math.random() >= 0.5 ? 'armstrong@gmail.com' : 'jackson@gmail.com';
      this.rightItems[i] = new Item(titleId, flags);
    }

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
