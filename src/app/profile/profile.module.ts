import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ProfileComponent } from './profile.component';
import { HeaderComponent } from './header/header.component';
import { IntroComponent } from './intro/intro.component';
import { AboutComponent } from './about/about.component';
import { SocialGroupComponent } from './social-group/social-group.component';

@NgModule({
  declarations: [ProfileComponent, HeaderComponent, IntroComponent, AboutComponent, SocialGroupComponent],
  imports: [
    CommonModule,
    MDBBootstrapModule.forRoot()
  ]
})
export class ProfileModule { }
