import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngulardragulaComponent } from './angulardragula.component';

describe('AngulardragulaComponent', () => {
  let component: AngulardragulaComponent;
  let fixture: ComponentFixture<AngulardragulaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngulardragulaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngulardragulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
