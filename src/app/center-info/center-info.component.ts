import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-center-info',
  templateUrl: './center-info.component.html',
  styleUrls: ['./center-info.component.scss']
})
export class CenterInfoComponent implements OnInit {

  constructor() { }
  @Input() item: object;

  ngOnInit() {

  }

}
