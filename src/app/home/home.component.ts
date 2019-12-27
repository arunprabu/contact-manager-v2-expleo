import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  today: Date = new Date();
  devName = 'arun';

  dummyText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure voluptatem reprehenderit non tempora';
  
  constructor() { }

  ngOnInit() {
  }

}
