import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})

export class AppComponent {

  // myMenuItem: [{name: string, link: string}] = [] as [{name: string, link: string}];
  //
  // onMenuAdded(menuItem: {name: string, link: string}) {
  //   this.myMenuItem.push({
  //     name: menuItem.name,
  //     link: menuItem.link
  //   });
  // }
  //
  // myHotelItem : [{name: string, country: string, phone:number}] = [] as [{name: string, country: string, phone:number}];
  //
  // onHotelAdded(hotelItem:{name: string, country: string, phone:number} ){
  //   this.myHotelItem.push({
  //     name: hotelItem.name,
  //     country: hotelItem.country,
  //     phone: hotelItem.phone
  //   });
  // }

  loadedFeature = 'recipe';

  onNavigate(feature : string){
    this.loadedFeature = feature;
  }

}
