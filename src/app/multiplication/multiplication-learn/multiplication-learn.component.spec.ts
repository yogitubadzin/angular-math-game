import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiplicationLearnComponent } from './multiplication-learn.component';

describe('MultiplicationLearnComponent', () => {
  let component: MultiplicationLearnComponent;
  let fixture: ComponentFixture<MultiplicationLearnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiplicationLearnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiplicationLearnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
