import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogledirectionsComponent } from './googledirections.component';

describe('GoogledirectionsComponent', () => {
  let component: GoogledirectionsComponent;
  let fixture: ComponentFixture<GoogledirectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoogledirectionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogledirectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
