import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupTableComponent } from './sup-table.component';

describe('SupTableComponent', () => {
  let component: SupTableComponent;
  let fixture: ComponentFixture<SupTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
