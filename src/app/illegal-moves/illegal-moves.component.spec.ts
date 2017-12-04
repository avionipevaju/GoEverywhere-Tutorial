import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IllegalMovesComponent } from './illegal-moves.component';

describe('IllegalMovesComponent', () => {
  let component: IllegalMovesComponent;
  let fixture: ComponentFixture<IllegalMovesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IllegalMovesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IllegalMovesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
