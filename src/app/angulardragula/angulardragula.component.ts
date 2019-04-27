import { Component, OnInit, OnDestroy } from '@angular/core';
import {AuthService, SocialUser, GoogleLoginProvider, FacebookLoginProvider, LinkedinLoginProvider} from 'ng4-social-login';

@Component({
  selector: 'app-angulardragula',
  templateUrl: './angulardragula.component.html',
  styleUrls: ['./angulardragula.component.css']
})
export class AngulardragulaComponent implements OnInit, OnDestroy {
  public user: any =  SocialUser;
  constructor(private socialAuthService: AuthService) {

   }

   facebooklogin() {
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID).then(
      (userData) => {
        this.user = userData;
        console.log(userData);
      });
   }

   googlelogin() {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).then(
      (userData) => {
        this.user = userData;
        console.log(userData);
      });
   }

   linkedinlogin() {
    this.socialAuthService.signIn(LinkedinLoginProvider.PROVIDER_ID).then(
      (userData) => {
        this.user = userData;
        console.log(userData);
      }, err => {
        console.log(err);
      });
   }


  ngOnInit() {
  }

  ngOnDestroy() {
  }

}
