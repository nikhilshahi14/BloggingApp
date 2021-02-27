import { Component, OnInit } from '@angular/core';
import { Login } from './../../model/login';
import * as message from '../../constants/constantMessages';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public model: Login;  
  public errorMsg: string;
  constructor(
    private router: Router,
    private route: ActivatedRoute,private authenticateService: AuthenticationService) {
    this.model = new Login();
  }

  ngOnInit(): void {

  }
  public login(): void {
    this.errorMsg = null;

    if (!this.model.username || this.model.username.length < 1) {
      this.errorMsg = message.ConstantMessages.usernameRequired;
    } else if (!this.model.password || this.model.password.length < 1) {
      this.errorMsg = message.ConstantMessages.passwordRequired;
    } else {
      if(this.model.username == 'blogger@grapecity.com' && this.model.password =='1qaz!QAZ'){
        this.router.navigate(['/blogs']);
      }
      else{
        this.errorMsg = message.ConstantMessages.InvalidCredentials;
      }

      // var result = this.authenticateService.login(this.model.username, this.model.password).subscribe(

      //   (response: any) => {
      //     if (response && response.message == "Success") {
      //     //   this.appState.setLoader = false;
      //     //   this.setLocalData({
      //     //     token: encrypted,
      //     //     user_id: response.accountId,
      //     //     role_Id: response.roleId,
      //     //     user_name: response.userName,
      //     //     team_id: response.teamId,
      //     //     firstName: response.firstName,
      //     //     lastName: response.lastName,
      //     //     consultantId:response.consultantId,
      //     //     email: 'admin@algoworks.com'
      //     //   });
      //     //   var UserRoleId = parseInt(localStorage.getItem('roleId'));
      //     //   if (UserRoleId == 4) {
      //     //     if(this.returnUrl != null && this.returnUrl != undefined && this.returnUrl !=""){
      //     //       this.router.navigate([this.returnUrl]);
      //     //     }
      //     //     else{
      //     //       this.router.navigate(['/manage/requestedInvoice']);
      //     //     }
            
      //     //   }
      //     //   else if (UserRoleId != 4 && UserRoleId != 5) {
      //     //     // Default url
      //     //     this.errorMsg="Logged in successfully."
             
      //     //     if(this.returnUrl != null && this.returnUrl != undefined && this.returnUrl !=""){
      //     //       this.router.navigate([this.returnUrl]);
      //     //     }
      //     //     else{
      //     //       this.router.navigate(['/manage/dashboard']);
      //     //     }
      //     //   }
      //     //   else if (UserRoleId == 5) {
      //     //     // Default url
      //     //     this.errorMsg="Logged in successfully."
      //     //     if(this.returnUrl != null && this.returnUrl != undefined && this.returnUrl !=""){
      //     //       this.router.navigate([this.returnUrl]);
      //     //     }
      //     //     else{
      //     //       this.router.navigate(['/manage/clientViewSales']);
      //     //     }
              
      //     //   }

      //     // } else {
      //     //  this.errorMsg = 'Invalid username or password';
      //     // //   alertify.warning("Invalid username or password.");
      //     // //  // return;
      //      }
      //   },
      // )
      }
  }
}
