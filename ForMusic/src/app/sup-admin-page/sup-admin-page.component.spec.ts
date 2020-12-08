import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupAdminPageComponent } from './sup-admin-page.component';

describe('SupAdminPageComponent', () => {
  let component: SupAdminPageComponent;
  let fixture: ComponentFixture<SupAdminPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupAdminPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupAdminPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
