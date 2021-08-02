import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterViewModel } from 'src/app/model/registerViewModel';
import { UserInfo } from 'src/app/model/userInfo';
import { IRegisterViewodel } from 'src/app/models/IRegistraterViewModel';


import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public registerInfo: IRegisterViewodel = {} as IRegisterViewodel;

  public errors: string = "";

  constructor(private authService: AuthService, private storageService: StorageService,private router:Router) { }

  ngOnInit(): void {
  }


  onSubmit() {
    // this.redirect();
    this.authService.register(this.registerInfo).subscribe((registerResponse: any) => {
      //alert(JSON.stringify(registerResponse));
      if (registerResponse.Status == 1 || registerResponse.Status == 2)
        this.errors = registerResponse.Message
      else {
        this.errors = "";

        var userInfo: UserInfo = {
          name: registerResponse.UserName,
          userId: registerResponse.UserId,
          //isAdmin : registerResponse.isAdmin,
          isAuthenticated: true
        } as UserInfo;

        this.storageService.saveUserInfo(JSON.stringify(userInfo));
        this.storageService.saveToken(registerResponse.Token);
        this.router.navigate(['home']);
      }
    });
    console.log("Form Submitted!");


  }
}

/*
*/
