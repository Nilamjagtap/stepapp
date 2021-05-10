import { Component, OnInit } from '@angular/core';
import { User } from '../user';

import { FormGroup,FormControl, FormBuilder, Validators, NgForm } from '@angular/forms'
import  {Router} from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  {
  logo:string="assets/image/image 2.png";


  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder ) { }

  loginForm = new FormGroup({});
  isSubmitted  =  false;
  
  ngOnInit(): void {
  
    this.loginForm  =  this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });
  
  }
  
  get formControls() { return this.loginForm.controls; }
  
  login(){
    console.log(this.loginForm.value);
    this.isSubmitted = true;
    if(this.loginForm.invalid){
      return;
    }
    this.authService.login(this.loginForm.value);
    this.router.navigateByUrl('/grade');
  }



}

