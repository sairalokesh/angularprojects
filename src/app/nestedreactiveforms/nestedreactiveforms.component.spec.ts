import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedreactiveformsComponent } from './nestedreactiveforms.component';

describe('NestedreactiveformsComponent', () => {
  let component: NestedreactiveformsComponent;
  let fixture: ComponentFixture<NestedreactiveformsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NestedreactiveformsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NestedreactiveformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
