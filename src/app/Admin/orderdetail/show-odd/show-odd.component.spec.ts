import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowOddComponent } from './show-odd.component';

describe('ShowOddComponent', () => {
  let component: ShowOddComponent;
  let fixture: ComponentFixture<ShowOddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowOddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowOddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
