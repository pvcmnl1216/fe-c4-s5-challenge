import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RouteService } from '../route.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  securityCode: string = "";

  constructor(private authService: AuthService,
    private routeService: RouteService,
    private snackBar: MatSnackBar ) { }

    validateTourGuideCode() {
      if(this.authService.login(this.securityCode))
      {
      this.routeService.navigateRequestsView();
      this.snackBar.open("Now You Get Access to Edit and Delete Note :-", "", {
        duration: 4000
        });
     
      }else{
        this.snackBar.open("Please Enter Correct Code :-", "", {
          duration: 4000
          });
      }      
  }

  ngOnInit(): void {
  }

}