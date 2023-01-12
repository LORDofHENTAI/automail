import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomailComponent } from './automail.component';

describe('AutomailComponent', () => {
  let component: AutomailComponent;
  let fixture: ComponentFixture<AutomailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutomailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutomailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
