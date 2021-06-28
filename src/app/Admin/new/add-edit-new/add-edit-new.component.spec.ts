import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditNewComponent } from './add-edit-new.component';

describe('AddEditNewComponent', () => {
  let component: AddEditNewComponent;
  let fixture: ComponentFixture<AddEditNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
