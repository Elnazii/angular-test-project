import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-hotel-add',
  templateUrl: './hotel-add.component.html',
  styleUrls: ['./hotel-add.component.css']
})
export class HotelAddComponent implements OnInit {

  @Output() hotelAdded: any = new EventEmitter <{name: string, country: string, phone:number}> ();
  hotelName: string;
  countryName: '';
  phoneNumber: '';

  constructor() { }

  ngOnInit() {
  }

  onCreateHotel(){
    this.hotelAdded.emit({
      name: this.hotelName,
      country: this.countryName,
      phone: this.phoneNumber
    })
  }

}
