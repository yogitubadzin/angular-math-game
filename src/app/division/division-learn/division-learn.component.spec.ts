import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DivisionLearnComponent } from './division-learn.component';

describe('DivisionLearnComponent', () => {
  let component: DivisionLearnComponent;
  let fixture: ComponentFixture<DivisionLearnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DivisionLearnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DivisionLearnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
