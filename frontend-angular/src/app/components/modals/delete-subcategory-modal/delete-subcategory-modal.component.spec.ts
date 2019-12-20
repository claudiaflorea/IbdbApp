import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteSubcategoryModalComponent } from './delete-subcategory-modal.component';

describe('DeleteSubcategoryModalComponent', () => {
  let component: DeleteSubcategoryModalComponent;
  let fixture: ComponentFixture<DeleteSubcategoryModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteSubcategoryModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteSubcategoryModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
