import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn: boolean = false;
    login(tourGuideCode: string) {
        this.isLoggedIn = tourGuideCode === "hello"
        return this.isLoggedIn;
    }
    logout() {
        this.isLoggedIn = false;
    }


  constructor() { }
}