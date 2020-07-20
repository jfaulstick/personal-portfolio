import { Component, OnInit } from '@angular/core';
import { Project } from '../models/project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  projects: Project[];

  constructor() {
    this.projects = [
      {
        title: 'QuizIt!',
        date: new Date('Apr 2018'),
        text: 'A multiplayer quiz game with mobile support.',
        imgUrl: '../../assets/images/quizit1.png',
        linkGithub: 'https://github.com/jfaulstick/QuizIt',
        linkLive: '',
        technologies: ['React', 'NodeJS', 'MongoDB'],
      },
      {
        title: 'Code Cats',
        date: new Date('Feb 2018'),
        text: 'A social chat platform experiment.',
        imgUrl: '../../assets/images/codecats1.jpg',
        linkGithub: 'https://github.com/jfaulstick/codecatsdotcom',
        linkLive: '',
        technologies: ['React', 'NodeJS', 'MySQL'],
      },
      {
        title: 'Scrape Da News',
        date: new Date('Mar 2018'),
        text: 'A news web scaper for Boston.com.',
        imgUrl: '../../assets/images/scrapedanews1.jpg',
        linkGithub: 'https://github.com/jfaulstick/HW-13---ScrapeDaNews',
        linkLive: 'https://fathomless-harbor-45708.herokuapp.com/',
        technologies: ['CheerioJS', 'NodeJS', 'MongoDB'],
      },
    ];
  }

  ngOnInit(): void {
    this.projects = this.projects.sort(
      (a: any, b: any) =>
        new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  }
}
