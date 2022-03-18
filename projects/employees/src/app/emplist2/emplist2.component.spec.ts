import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Emplist2Component } from './emplist2.component';

describe('Emplist2Component', () => {
  let component: Emplist2Component;
  let fixture: ComponentFixture<Emplist2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Emplist2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Emplist2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
