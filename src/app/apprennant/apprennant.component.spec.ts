import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprennantComponent } from './apprennant.component';

describe('ApprennantComponent', () => {
  let component: ApprennantComponent;
  let fixture: ComponentFixture<ApprennantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApprennantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprennantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
