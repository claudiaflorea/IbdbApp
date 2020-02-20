import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UserListComponent } from './components/dashboard/user-list/user-list.component';
import { UserFormComponent } from './components/user-form/user-form.component';
// import { AuthGuard } from './guards/auth-guard.service';
import { SignupComponent } from './components/signup/signup.component';
import { LogoutComponent } from './components/logout/logout.component';
import { AuthGaurdService } from './services/auth-guard.service';
import { BookItemsComponent } from './components/book-items/book-items.component';
import { BooksPageComponent } from './components/books-page/books-page.component';
import { BookListComponent } from './components/dashboard/book-list/book-list.component';
import { AuthorListComponent } from './components/dashboard/author-list/author-list.component';
import { CategoryListComponent } from './components/dashboard/category-list/category-list.component';
import { SubcategoryListComponent } from './components/dashboard/subcategory-list/subcategory-list.component';
import { UserComponent } from './components/roles/user/user.component';
import { OperatorComponent } from './components/roles/operator/operator.component';
import { AdminComponent } from './components/roles/admin/admin.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contact', component: ContactComponent },
  {
      path: 'user',
      component: UserComponent
  },
  {
      path: 'operator',
      component: OperatorComponent
  },
  {
      path: 'admin',
      component: AdminComponent
  },

    {
      path: 'login', component: LoginComponent,
    // canActivate: [AuthGuard]
    },
  {
    path: 'logout', component: LogoutComponent,
    canActivate: [AuthGaurdService]
  },
  {
    path: 'signup', component: SignupComponent,
   // canActivate: [AuthGuard]
  },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'users-manager', component: UserListComponent },
  { path: 'books-manager', component: BookListComponent },
  { path: 'authors-manager', component: AuthorListComponent },
  { path: 'categories-manager', component: CategoryListComponent },
  { path: 'subcategories-manager', component: SubcategoryListComponent },
  { path: 'adduser', component: UserFormComponent },
  { path: 'books', component:  BooksPageComponent },
  { path: 'book/all/:categoryId', component:  BooksPageComponent },
  { path: 'book/all/:subcategoryId', component:  BooksPageComponent },
  { path: 'book/:id', component: BookItemsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
