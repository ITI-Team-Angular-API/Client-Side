import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public UserName :string = "";
  public UserEmail :string = "";
  public UserId :string = "";

  constructor(private homeService:HomeService) { }

  ngOnInit(): void {
    this.homeService.GetUserInfo().subscribe((response: any) => {
    this.UserName = response.UserName;
    this.UserEmail = response.Email,
    this.UserId = response.UserId
    });
  }

}
