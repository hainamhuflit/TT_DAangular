import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditDetailComponent } from './add-edit-detail.component';

describe('AddEditDetailComponent', () => {
  let component: AddEditDetailComponent;
  let fixture: ComponentFixture<AddEditDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
