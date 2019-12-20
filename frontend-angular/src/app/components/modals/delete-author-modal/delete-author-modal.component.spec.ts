import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAuthorModalComponent } from './delete-author-modal.component';

describe('DeleteAuthorModalComponent', () => {
  let component: DeleteAuthorModalComponent;
  let fixture: ComponentFixture<DeleteAuthorModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteAuthorModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteAuthorModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
