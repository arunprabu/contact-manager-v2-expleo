import { Component, OnInit } from '@angular/core';
import { AccountDataService } from '../shared/services/account-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  today: Date = new Date();
  devName = 'arun';

  dummyText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure voluptatem reprehenderit non tempora';
  
  accountName;

  constructor( private accountDataService: AccountDataService) { }

  ngOnInit() {
    // Step 4: Let's get the latest account name first and always
    // for step5 refer about.comp.ts 
    this.accountDataService.latestAccountName.subscribe( (name: any) => {
      console.log(name);
      this.accountName = name;
    }); 
  }

  onUpdateAccount() {
    this.accountDataService.updateAccountName(this.accountName + 'Vijay');
  }
}
