import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';  
import {AuthService} from '../auth.service';
import{Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  logo:string="assets/navbar/logo1.png";

  isLoggedIn$!: Observable<boolean>;
  username$!:Observable<string>;
                 //
  constructor(private router: Router, private authService: AuthService) { }  

 
     ngOnInit() {
    this.isLoggedIn$ = this.authService.isLoggedIn; 
     this.username$ = this.authService.currentusername;// {2}
  }
   
  logout(){
    this.authService.logout();                      // {3}
  }

}
