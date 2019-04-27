import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrapanddropComponent } from './drapanddrop.component';

describe('DrapanddropComponent', () => {
  let component: DrapanddropComponent;
  let fixture: ComponentFixture<DrapanddropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrapanddropComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrapanddropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
