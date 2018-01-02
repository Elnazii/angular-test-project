import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-add',
  templateUrl: './child-add.component.html',
  styleUrls: ['./child-add.component.css']
})
export class ChildAddComponent implements OnInit {

  @Output() menuAdded: any = new EventEmitter<{name: string, link: string}>();
  newName = '';
  newLink = '';

  constructor() { }

  ngOnInit() {
  }

  onCreateMenu() {
    this.menuAdded.emit({
      name: this.newName,
      link: this.newLink
    });
  }

}
