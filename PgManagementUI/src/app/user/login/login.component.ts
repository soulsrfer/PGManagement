import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  addForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private loginService: UserServiceService, private router: Router) { }

  ngOnInit(): void {
    this.initializedForm();
  }

  initializedForm() {
    this.addForm = this.formBuilder.group({
      contact: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    })
  }

  submit() {
    if (this.addForm.valid) {
      let user;
      let isSuccess: boolean;
      this.loginService.login(this.addForm.value).subscribe(data => {
        user = data;
        if(this.loginService.checkUser(user)){
          this.router.navigate(['/user-home']);
        }else{
          alert("Enter Valid Mobile Number & Password")
        }
      });
    }
  }

}
