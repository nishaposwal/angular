import { Component, OnInit } from '@angular/core';
import { getMaxListeners } from 'process';
import { UseExistingWebDriver } from 'protractor/built/driverProviders';
import { from } from 'rxjs';
import { User } from '../user';
import { BlessService } from '../bless.service';

@Component({
  selector: 'app-blessings',
  templateUrl: './blessings.component.html',
  styleUrls: ['./blessings.component.css']
})
export class BlessingsComponent implements OnInit {

    userModel =  new User('', '', ''); 
    user1 = new User ('Nisha', 'lol@getMaxListeners.com', 'kolo');
     users: User[];

    //  l: number = this.users.length;

  constructor(private _bless: BlessService) { }

  ngOnInit(): void {

    this._bless.getblessings().subscribe(
      data=> this.users = data
    );
  }

  onSubmit() {
    return this._bless.enroll(this.userModel).subscribe(
      data => console.log('suc' , data),
      
    )

  }

  reset() {
    this.userModel.name = "";
    this.userModel.email = "";
    this.userModel.bless = "";

  }

}
