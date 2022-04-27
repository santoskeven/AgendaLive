import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveRegisterComponent } from './live-register.component';

describe('LiveRegisterComponent', () => {
  let component: LiveRegisterComponent;
  let fixture: ComponentFixture<LiveRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiveRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
