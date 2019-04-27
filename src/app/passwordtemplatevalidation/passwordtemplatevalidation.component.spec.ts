import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordtemplatevalidationComponent } from './passwordtemplatevalidation.component';

describe('PasswordtemplatevalidationComponent', () => {
  let component: PasswordtemplatevalidationComponent;
  let fixture: ComponentFixture<PasswordtemplatevalidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasswordtemplatevalidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordtemplatevalidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
