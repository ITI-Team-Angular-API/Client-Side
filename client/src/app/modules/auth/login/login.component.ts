import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginViewModel } from 'src/app/model/loginViewModel';
import { UserInfo } from 'src/app/model/userInfo';
import { ILoginViewModel } from 'src/app/models/ILoginViewModel';
import { AccountService } from 'src/app/services/account.service';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginInfo:ILoginViewModel = {
    Password:"",
    UserName:""
  } ;

  public errors: string = "";

  constructor(private authService: AuthService, private storageService: StorageService,private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit() {
    this.storageService.removeToken();
    this.storageService.removeRefreshToken();

    this.authService.login(this.loginInfo).subscribe((loginResponse: any) => {
      if (loginResponse.Status == 1 || loginResponse.Status == 2)
      this.errors = loginResponse.Message
    else {
      var userInfo:UserInfo = {
      name : loginResponse.UserName,
      userId :  loginResponse.UserId,
      isAdmin : loginResponse.IsAdmin,
      isAuthenticated:true
      } as UserInfo;

      this.storageService.saveUserInfo(JSON.stringify(userInfo));
      this.storageService.saveToken(loginResponse.Token);
      this.router.navigate(['home']);
    }
  })
    //if (this.loginForm.valid) {
      console.log("Form Submitted!");
  // }
  }
}
