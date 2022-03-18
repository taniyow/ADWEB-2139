import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Emplist1Component } from './emplist1.component';

describe('Emplist1Component', () => {
  let component: Emplist1Component;
  let fixture: ComponentFixture<Emplist1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Emplist1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Emplist1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
