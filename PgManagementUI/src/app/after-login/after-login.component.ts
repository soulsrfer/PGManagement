import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-after-login',
  templateUrl: './after-login.component.html',
  styleUrls: ['./after-login.component.css']
})
export class AfterLoginComponent implements OnInit {
  name?: string;
  constructor(private router: Router, private userService: UserServiceService) { }

  ngOnInit(): void {
    this.getUserName();
  }

  getUserName()
  {
    let user = this.userService.getLoggedInUserData();
    if (user){
      let user1 = JSON.parse(user); 
      if(user1.first_name || user1.last_name){
        this.name = user1.first_name;
      }
  }
}
}
