import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  name?: string;
  address?: string;
  occupation?: string;
  deposite?: number;
  payment?: any;

  constructor(private router: Router, private userService: UserServiceService) { }

  ngOnInit(): void {
    this.getUserData();
  }

  getUserData() {
    let user = this.userService.getLoggedInUserData();
    if (user){
      let user1 = JSON.parse(user); 
      if(user1.first_name || user1.last_name){
        this.name = user1.first_name + ' '+  user1.last_name;
      }

      if(user1.reserveUser){
        user1.reserveUser.forEach((element: { payment: number | undefined; }) => {
          if(element.payment){
            this.payment = element.payment;
          }
        });
      }

      
    }
  }

}
``