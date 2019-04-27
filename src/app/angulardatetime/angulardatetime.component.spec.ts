import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngulardatetimeComponent } from './angulardatetime.component';

describe('AngulardatetimeComponent', () => {
  let component: AngulardatetimeComponent;
  let fixture: ComponentFixture<AngulardatetimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngulardatetimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngulardatetimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
