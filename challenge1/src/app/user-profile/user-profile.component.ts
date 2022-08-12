import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {



  User = {
    name : 'Bonnard',
    firstName : 'Alexandre',
    age : 33,
    quote : '',
    photo : 'https://randomuser.me/api/portraits/lego/2.jpg'
  };

  isUserAgeVisible = true;

 toggleAgeVisibility() {
   this.isUserAgeVisible = !this.isUserAgeVisible
 }

  constructor() { }


  ngOnInit(): void {
  }
  direBonjour() {
    console.log("l'age a disparue");

}
}
