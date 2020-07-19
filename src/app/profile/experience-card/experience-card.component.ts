import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience-card',
  templateUrl: './experience-card.component.html',
  styleUrls: ['./experience-card.component.scss']
})
export class ExperienceCardComponent implements OnInit {
  @Input() iconColor: string;
  @Input() jobTitle: string;
  @Input() company: string;
  @Input() location: string;
  @Input() description: string;
  @Input() startDate: Date;
  @Input() endDate: Date;

  constructor() { }

  ngOnInit(): void {
  }

}
