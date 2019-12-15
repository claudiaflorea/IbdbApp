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
import { UserListComponent } from './components/user-list/user-list.component';
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

@NgModule({
  declarations: [
    AppComponent,
    HeaderMenuComponent,
    FooterMenuComponent,
    AboutUsComponent,
    HomeComponent,
    ContactComponent,
    BooksCarouselComponent,
    UserListComponent,
    UserFormComponent,
    DashboardComponent,
    LoginComponent,
    SignupComponent,
    LogoutComponent,
    FilterPipe
  ],
  imports: [
    AppRoutingModule,
    NgbModule,
    RouterModule,
    BrowserModule,
    HttpClientModule
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
    AuthGaurdService,
    AuthenticationService,
    HttpClientService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule {}
