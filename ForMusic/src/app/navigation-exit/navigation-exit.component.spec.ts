import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationExitComponent } from './navigation-exit.component';

describe('NavigationExitComponent', () => {
  let component: NavigationExitComponent;
  let fixture: ComponentFixture<NavigationExitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationExitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationExitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
