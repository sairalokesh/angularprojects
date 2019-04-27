import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularsignatureComponent } from './angularsignature.component';

describe('AngularsignatureComponent', () => {
  let component: AngularsignatureComponent;
  let fixture: ComponentFixture<AngularsignatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularsignatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularsignatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
