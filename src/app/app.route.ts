import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NewsComponent } from './news/news.component';
import { ServicesComponent } from './services/services.component';
import { WorksComponent } from './works/works.component';
import { ReactiveformsComponent } from './reactiveforms/reactiveforms.component';
import { TemplateformsComponent } from './templateforms/templateforms.component';
import { NestedreactiveformsComponent } from './nestedreactiveforms/nestedreactiveforms.component';
import { PasswordtemplatevalidationComponent } from './passwordtemplatevalidation/passwordtemplatevalidation.component';
import { AngulardatetimeComponent } from './angulardatetime/angulardatetime.component';
import { DrapanddropComponent } from './drapanddrop/drapanddrop.component';
import { AngulardragulaComponent } from './angulardragula/angulardragula.component';
import { AngularsignatureComponent } from './angularsignature/angularsignature.component';
import {VideoComponent} from './video/video.component';
import {GoogledirectionsComponent} from './googledirections/googledirections.component';

export const ROUTES: Routes = [
  { path: 'reactiveforms', component: ReactiveformsComponent },
  { path: 'templateforms', component: TemplateformsComponent },
  { path: 'nestedreactiveforms', component: NestedreactiveformsComponent },
  { path: 'fileupload', component: HomeComponent },
  { path: 'passwordreactivevalidation', component: AboutComponent },
  { path: 'passwordtemplatevalidation', component: PasswordtemplatevalidationComponent },
  { path: 'signaturepad', component: AngularsignatureComponent },
  { path: 'sociallogin', component: AngulardragulaComponent },
  { path: 'charts', component: ContactComponent },
  { path: 'google_Maps', component: NewsComponent },
  { path: 'googledirections', component: GoogledirectionsComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'checkboxwithcustomfilter', component: WorksComponent },
  { path: 'datetimepicker', component: AngulardatetimeComponent },
  { path: 'draganddrop', component: DrapanddropComponent },
  { path: 'videoplayer', component: VideoComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'templateforms' }
];
