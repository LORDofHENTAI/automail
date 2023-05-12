import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SBOOKComponent } from './sbook.component';

describe('SBOOKComponent', () => {
  let component: SBOOKComponent;
  let fixture: ComponentFixture<SBOOKComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SBOOKComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SBOOKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
