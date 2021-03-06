import { Component, OnInit } from '@angular/core';
import { User, UserService } from '../../services/user.service';
import { HttpHeaders, HttpRequest } from '@angular/common/http';
import { Router } from "@angular/router";


@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent implements OnInit
{

  constructor(private userService: UserService, private router: Router) { }

  username: String = "";
  password: String = "";
  fName: String = "";
  lName: String = "";
  email: String = "";

  onClickRegister(username: String, password: String, fName: String, lName: String, email: String)
  {
    let user = new User(this.username, this.password, this.fName, this.lName, this.email);
    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    this.userService.createUser(user, options).subscribe((data) =>
    {
      console.log("returned data: ", data);
      this.router.navigateByUrl("/user-login");
    })
  }

  ngOnInit(): void
  {
  }

}
