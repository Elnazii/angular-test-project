import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hotel-view',
  templateUrl: './hotel-view.component.html',
  styleUrls: ['./hotel-view.component.css']
})
export class HotelViewComponent implements OnInit {

  @Input() hotelItem : [{name: string, country: string, phone:number}];

  constructor() { }

  ngOnInit() {
  }

}
