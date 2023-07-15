import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  

  loginForm = new FormGroup({
    user: new FormControl(""),
    password: new FormControl(""),
  });


  constructor(protected router:Router){

  }

  userKey = "test01";
  passKey = "test01";

  ngOnInit(): void {
    
  }

  onSubmit(){
    const user = this.loginForm.value.user;
    const pass = this.loginForm.value.password;

    if(user == this.userKey && pass == this.passKey){
      this.router.navigate(["tasks"]);
    }
  }

}
