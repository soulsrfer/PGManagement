import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  loggedIn: boolean = false;
  public loggedInUser:any;

  private addUser = "http://localhost:8080/api/createUser";
  private loginUrl = "http://localhost:8080/api/login";

  constructor(private httpClient: HttpClient) { }

  createUser(newUser: any): Observable<any> {
    return this.httpClient.post<any>(this.addUser, newUser);
  }

  login(loginPara: any) {
    let json = {
      contactNumber: loginPara.contact,
      password: loginPara.password
    }
    return this.httpClient.post<any>(this.loginUrl, json);
  }

  checkUser(user:any){
    if (user != null) {
      console.log("If User", user)
      localStorage.setItem('user', JSON.stringify(user));
      this.loggedIn = true;
      return true;
    } else {
      console.log("Else User", user)
      localStorage.setItem('user', '');
      this.loggedIn = false;
      return false;
    }
  }

  //  checkUserExist(loginPara: any){
  //   let json = {
  //     contactNumber: loginPara.contact,
  //     password: loginPara.password
  //   }
  //   return this.httpClient.post<any>(this.loginUrl, json).subscribe(data => this.loogedInUser = data);
  // }


  getAuthStatus() {
    return this.loggedIn;
  }
}
