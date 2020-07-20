import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ProfileComponent } from './profile.component';
import { HeaderComponent } from './header/header.component';
import { IntroComponent } from './intro/intro.component';
import { AboutComponent } from './about/about.component';
import { SocialGroupComponent } from './social-group/social-group.component';
import { ExperienceComponent } from './experience/experience.component';
import { ExperienceCardComponent } from './experience-card/experience-card.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    ProfileComponent,
    HeaderComponent,
    IntroComponent,
    AboutComponent,
    SocialGroupComponent,
    ExperienceComponent,
    ExperienceCardComponent,
    SkillsComponent,
    ProjectsComponent,
    FooterComponent,
  ],
  imports: [CommonModule, MDBBootstrapModule.forRoot()],
})
export class ProfileModule {}
