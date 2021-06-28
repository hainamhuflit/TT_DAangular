import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditOddComponent } from './add-edit-odd.component';

describe('AddEditOddComponent', () => {
  let component: AddEditOddComponent;
  let fixture: ComponentFixture<AddEditOddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditOddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditOddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
