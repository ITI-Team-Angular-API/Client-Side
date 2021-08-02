import { Component, OnInit } from '@angular/core';
import { UserInfo } from './model/userInfo';
import { StorageService } from './services/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {
   title = 'APIAngular';
  public userInfo: UserInfo  = {} as UserInfo;

  constructor(private storageService : StorageService) { 

  }

  Logout(): void {
   this.storageService.removeToken();   
   this.storageService.removeUserInfo();
   this.userInfo = { isAuthenticated : false } as UserInfo;
  }
  ngOnInit(): void {
    var uInfo = this.storageService.getUserInfo();
    if(uInfo != null)
    {
      this.userInfo = JSON.parse(uInfo)
    }
    /*
    var windowHeight = window.innerHeight - 186;
  document.getElementById("content").style.minHeight = windowHeight.toString() + "px";

  var proxy = $.connection.ShoppingCartHub;
  $.connection.hub.start().done(
      function () {
          var id = $("#userId").val();
          proxy.server.UpdateCart(id);
      }
  );
  proxy.client.UpdateCart = function (quantity, userid) {
      var id = $("#userId").val();
      if (id == userid) {
          $(".cartQuantity").text(quantity);
      }
  }*/
  }
 
}
