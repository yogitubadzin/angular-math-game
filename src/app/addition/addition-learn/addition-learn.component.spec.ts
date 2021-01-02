import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionLearnComponent } from './addition-learn.component';

describe('AdditionLearnComponent', () => {
  let component: AdditionLearnComponent;
  let fixture: ComponentFixture<AdditionLearnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdditionLearnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditionLearnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
