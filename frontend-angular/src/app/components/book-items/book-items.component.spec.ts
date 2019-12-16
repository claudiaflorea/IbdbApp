import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookItemsComponent } from './book-items.component';

describe('BooksPageComponent', () => {
  let component: BookItemsComponent;
  let fixture: ComponentFixture<BookItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
