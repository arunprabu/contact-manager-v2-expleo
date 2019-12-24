import { Component, OnInit } from '@angular/core';

export interface Section {
  name: string;
  updated: Date;
}

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styles: [
    `
    mat-grid-tile {
      background: lightblue;
    },
    .mat-list-icon {
      color: rgba(0, 0, 0, 0.54);
    }
    `
  ]
})
export class DemoComponent implements OnInit {

  folders: Section[] = [
    {
      name: 'Photos',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Recipes',
      updated: new Date('1/17/16'),
    }
  ];

  notes: Section[] = [
    {
      name: 'Vacation Itinerary',
      updated: new Date('2/20/16'),
    },
    {
      name: 'Kitchen Remodel',
      updated: new Date('1/18/16'),
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
