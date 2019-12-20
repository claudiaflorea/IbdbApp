import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSubcategoryModalComponent } from './edit-subcategory-modal.component';

describe('EditSubcategoryModalComponent', () => {
  let component: EditSubcategoryModalComponent;
  let fixture: ComponentFixture<EditSubcategoryModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSubcategoryModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSubcategoryModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
