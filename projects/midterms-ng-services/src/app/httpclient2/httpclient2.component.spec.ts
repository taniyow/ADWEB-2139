import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Httpclient2Component } from './httpclient2.component';

describe('Httpclient2Component', () => {
  let component: Httpclient2Component;
  let fixture: ComponentFixture<Httpclient2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Httpclient2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Httpclient2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
