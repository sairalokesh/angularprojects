import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.route';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {NgxPaginationModule} from 'ngx-pagination';

import { SearchPipe } from './search.pipe';
import { JsonService } from './json.service';
import { HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { WorksComponent } from './works/works.component';
import { NewsComponent } from './news/news.component';
import { ContactComponent } from './contact/contact.component';
import { ReactiveformsComponent } from './reactiveforms/reactiveforms.component';
import { TemplateformsComponent } from './templateforms/templateforms.component';
import { NestedreactiveformsComponent } from './nestedreactiveforms/nestedreactiveforms.component';

import { AgmCoreModule } from '@agm/core';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';
import { ChartModule } from 'angular2-chartjs';
import { AngularDateTimePickerModule } from 'angular2-datetimepicker';
import { PasswordtemplatevalidationComponent } from './passwordtemplatevalidation/passwordtemplatevalidation.component';
import { ValidatorDirective } from './validator.directive';
import { AngulardatetimeComponent } from './angulardatetime/angulardatetime.component';
import { DrapanddropComponent } from './drapanddrop/drapanddrop.component';
import { DragDropDirectiveModule } from 'angular4-drag-drop';
import { AngulardragulaComponent } from './angulardragula/angulardragula.component';

import { AngularsignatureComponent } from './angularsignature/angularsignature.component';
import { SignaturePadModule } from 'angular2-signaturepad';

import { SocialLoginModule, AuthServiceConfig, GoogleLoginProvider, FacebookLoginProvider, LinkedinLoginProvider } from 'ng4-social-login';
import { VideoComponent } from './video/video.component';

import { VgCoreModule } from 'videogular2/core';
import { VgControlsModule } from 'videogular2/controls';
import { VgBufferingModule } from 'videogular2/buffering';
import { VgOverlayPlayModule } from 'videogular2/overlay-play';
import { VgStreamingModule } from 'videogular2/streaming';
import { VgImaAdsModule } from 'videogular2/ima-ads';
import { GoogledirectionsComponent } from './googledirections/googledirections.component';

const CONFIG = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider('378578336151-2e84bss75kp699ivffbprtslmv7a8pk2.apps.googleusercontent.com')
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider('742100769251911')
  },
  {
    id: LinkedinLoginProvider.PROVIDER_ID,
    provider: new LinkedinLoginProvider('81ytwv1hzxagmd')
  }
], false);

export function provideConfig() {
  return CONFIG;
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    WorksComponent,
    NewsComponent,
    ContactComponent,
    ReactiveformsComponent,
    TemplateformsComponent,
    NestedreactiveformsComponent,
    SearchPipe,
    PasswordtemplatevalidationComponent,
    ValidatorDirective,
    AngulardatetimeComponent,
    DrapanddropComponent,
    AngulardragulaComponent,
    AngularsignatureComponent,
    VideoComponent,
    GoogledirectionsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    HttpClientModule,
    ChartModule,
    AngularDateTimePickerModule,
    DragDropDirectiveModule,
    SignaturePadModule,
    SocialLoginModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAjUHpiDhHJwK0vCMayeOTvEB08RXI1YCg',
      libraries: ['places']
    }),
    AgmSnazzyInfoWindowModule,
    VgCoreModule,
    VgControlsModule,
    VgBufferingModule,
    VgOverlayPlayModule,
    VgStreamingModule,
    VgImaAdsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    JsonService,
    {provide: AuthServiceConfig, useFactory: provideConfig}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
