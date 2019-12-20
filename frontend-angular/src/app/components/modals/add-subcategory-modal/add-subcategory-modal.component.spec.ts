import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSubcategoryModalComponent } from './add-subcategory-modal.component';

describe('AddSubcategoryModalComponent', () => {
  let component: AddSubcategoryModalComponent;
  let fixture: ComponentFixture<AddSubcategoryModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSubcategoryModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSubcategoryModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
