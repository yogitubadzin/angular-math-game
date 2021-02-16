import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubstractionLearnComponent } from './substraction-learn.component';

describe('SubstractionLearnComponent', () => {
  let component: SubstractionLearnComponent;
  let fixture: ComponentFixture<SubstractionLearnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubstractionLearnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubstractionLearnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
