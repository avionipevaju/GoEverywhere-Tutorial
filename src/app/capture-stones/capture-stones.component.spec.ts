import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaptureStonesComponent } from './capture-stones.component';

describe('CaptureStonesComponent', () => {
  let component: CaptureStonesComponent;
  let fixture: ComponentFixture<CaptureStonesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaptureStonesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaptureStonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
