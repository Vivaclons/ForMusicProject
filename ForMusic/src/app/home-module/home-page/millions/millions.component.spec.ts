import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MillionsComponent } from './millions.component';

describe('MillionsComponent', () => {
  let component: MillionsComponent;
  let fixture: ComponentFixture<MillionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MillionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MillionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
