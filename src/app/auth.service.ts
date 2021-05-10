import { Injectable } from '@angular/core';
import { User } from './user';
import { BehaviorSubject } from 'rxjs';

import  {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(    private router: Router) { }

  private loggedIn = new BehaviorSubject<boolean>(false); // {1}
  private username = new BehaviorSubject<string>(localStorage.getItem('username')!);

  
    get isLoggedIn() {
    return this.loggedIn.asObservable(); // {2}
  }

  login(user:User){
    if (user.username !== '' && user.password !== '' ) { // {3}
      this.loggedIn.next(true);
      localStorage.setItem('username',user.username);
      this.router.navigate(['/']);
    }
  }


  logout() {                            // {4}
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }
   
get currentusername(){
  return this.username.asObservable();
}




}