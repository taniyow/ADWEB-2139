import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Emplist3Component } from './emplist3.component';

describe('Emplist3Component', () => {
  let component: Emplist3Component;
  let fixture: ComponentFixture<Emplist3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Emplist3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Emplist3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
