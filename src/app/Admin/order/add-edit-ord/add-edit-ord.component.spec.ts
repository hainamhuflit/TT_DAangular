import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditOrdComponent } from './add-edit-ord.component';

describe('AddEditOrdComponent', () => {
  let component: AddEditOrdComponent;
  let fixture: ComponentFixture<AddEditOrdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditOrdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditOrdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
