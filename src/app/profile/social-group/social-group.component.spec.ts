import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialGroupComponent } from './social-group.component';

describe('SocialGroupComponent', () => {
  let component: SocialGroupComponent;
  let fixture: ComponentFixture<SocialGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
