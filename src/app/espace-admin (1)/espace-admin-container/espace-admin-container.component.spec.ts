import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EspaceAdminContainerComponent } from './espace-admin-container.component';

describe('EspaceAdminContainerComponent', () => {
  let component: EspaceAdminContainerComponent;
  let fixture: ComponentFixture<EspaceAdminContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspaceAdminContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EspaceAdminContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
