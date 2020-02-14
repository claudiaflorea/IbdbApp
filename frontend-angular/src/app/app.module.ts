import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderMenuComponent } from './components/header-menu/header-menu.component';
import { FooterMenuComponent } from './components/footer-menu/footer-menu.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { BooksCarouselComponent } from './components/books-carousel/books-carousel.component';
import { UserListComponent } from './components/dashboard/user-list/user-list.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UserService } from './services/user.service';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { AuthorService } from './services/author.service';
import { BookService } from './services/book.service';
import { CategoryService } from './services/category.service';
import { SubcategoryService } from './services/subcategory.service';
import { FeedbackService } from './services/feedback.service';
import { ReviewService } from './services/review.service';
import { PublisherService } from './services/publisher.service';
// import { AuthGuard } from './guards/auth-guard.service';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './components/signup/signup.component';
import { LogoutComponent } from './components/logout/logout.component';
import { AuthGaurdService } from './services/auth-guard.service';
import { AuthenticationService } from './services/authentication.service';
import { HttpClientService } from './services/httpclient.service';
import { FilterPipe} from './filter.pipe';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { BookItemsComponent } from './components/book-items/book-items.component';
import { BooksPageComponent } from './components/books-page/books-page.component';
import { RatingModule } from 'ng-starrating';
import { AddUserModalComponent } from './components/modals/add-user-modal/add-user-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditUserModalComponent } from './components/modals/edit-user-modal/edit-user-modal.component';
import { DeleteUserModalComponent } from './components/modals/delete-user-modal/delete-user-modal.component';
import { BookListComponent } from './components/dashboard/book-list/book-list.component';
import { AddBookModalComponent } from './components/modals/add-book-modal/add-book-modal.component';
import { EditBookModalComponent } from './components/modals/edit-book-modal/edit-book-modal.component';
import { DeleteBookModalComponent } from './components/modals/delete-book-modal/delete-book-modal.component';
import { AddAuthorModalComponent } from './components/modals/add-author-modal/add-author-modal.component';
import { EditAuthorModalComponent } from './components/modals/edit-author-modal/edit-author-modal.component';
import { DeleteAuthorModalComponent } from './components/modals/delete-author-modal/delete-author-modal.component';
import { AddCategoryModalComponent } from './components/modals/add-category-modal/add-category-modal.component';
import { EditCategoryModalComponent } from './components/modals/edit-category-modal/edit-category-modal.component';
import { DeleteCategoryModalComponent } from './components/modals/delete-category-modal/delete-category-modal.component';
import { AddSubcategoryModalComponent } from './components/modals/add-subcategory-modal/add-subcategory-modal.component';
import { EditSubcategoryModalComponent } from './components/modals/edit-subcategory-modal/edit-subcategory-modal.component';
import { DeleteSubcategoryModalComponent } from './components/modals/delete-subcategory-modal/delete-subcategory-modal.component';
import { AuthorListComponent } from './components/dashboard/author-list/author-list.component';
import { CategoryListComponent } from './components/dashboard/category-list/category-list.component';
import { SubcategoryListComponent } from './components/dashboard/subcategory-list/subcategory-list.component';
import { EmailService } from './services/email.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderMenuComponent,
    FooterMenuComponent,
    AboutUsComponent,
    HomeComponent,
    ContactComponent,
    BooksCarouselComponent,
    UserFormComponent,
    DashboardComponent,
    UserListComponent,
    LoginComponent,
    SignupComponent,
    LogoutComponent,
    FilterPipe,
    BookItemsComponent,
    BooksPageComponent,
    AddUserModalComponent,
    EditUserModalComponent,
    DeleteUserModalComponent,
    BookListComponent,
    AddBookModalComponent,
    EditBookModalComponent,
    DeleteBookModalComponent,
    AddAuthorModalComponent,
    EditAuthorModalComponent,
    DeleteAuthorModalComponent,
    AddCategoryModalComponent,
    EditCategoryModalComponent,
    DeleteCategoryModalComponent,
    AddSubcategoryModalComponent,
    EditSubcategoryModalComponent,
    DeleteSubcategoryModalComponent,
    AuthorListComponent,
    CategoryListComponent,
    SubcategoryListComponent
  ],
  imports: [
    AppRoutingModule,
    NgbModule,
    RouterModule,
    BrowserModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatAutocompleteModule,
    RatingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    UserService,
    AuthorService,
    BookService,
    CategoryService,
    SubcategoryService,
    FeedbackService,
    ReviewService,
    PublisherService,
    EmailService,
    AuthGaurdService,
    AuthenticationService,
    HttpClientService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
  entryComponents: [
    AddUserModalComponent,
    EditUserModalComponent,
    DeleteUserModalComponent,
    AddBookModalComponent,
    EditBookModalComponent,
    DeleteBookModalComponent,
    AddAuthorModalComponent,
    EditAuthorModalComponent,
    DeleteAuthorModalComponent,
    AddCategoryModalComponent,
    EditCategoryModalComponent,
    DeleteCategoryModalComponent,
    AddSubcategoryModalComponent,
    EditSubcategoryModalComponent,
    DeleteSubcategoryModalComponent
  ]
})
export class AppModule {}
