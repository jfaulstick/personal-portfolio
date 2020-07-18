import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ProfileComponent } from './profile.component';
import { HeaderComponent } from './header/header.component';
import { IntroComponent } from './intro/intro.component';

@NgModule({
  declarations: [ProfileComponent, HeaderComponent, IntroComponent],
  imports: [
    CommonModule,
    MDBBootstrapModule.forRoot()
  ]
})
export class ProfileModule { }
