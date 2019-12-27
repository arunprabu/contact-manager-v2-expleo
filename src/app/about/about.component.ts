import { Component, OnInit } from '@angular/core';
import { AccountDataService } from '../shared/services/account-data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: []
})
export class AboutComponent implements OnInit {

  accountName;

  constructor(private accountDataService: AccountDataService) { }

  ngOnInit() {
    // Step 5: Let's get the latest account name first and always
    this.accountDataService.latestAccountName.subscribe( (name: any) => {
      console.log(name);
      this.accountName = name;
    });
  }

}
