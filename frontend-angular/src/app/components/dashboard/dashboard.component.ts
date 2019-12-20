import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  greet: string;
  constructor(private router: Router) {
    this.greet = 'Hi, Admin! What do you want to do today?';
  }
  ngOnInit() {
  }

  goToUsers() {
    this.router.navigateByUrl('/users-manager');
  }
  goToBooks() {
    this.router.navigateByUrl('/books-manager');
  }
  goToAuthors() {
    this.router.navigateByUrl('/authors-manager');
  }
  goToCategories() {
    this.router.navigateByUrl('/categories-manager');
  }
  goToSubcategories() {
    this.router.navigateByUrl('/subcategories-manager');
  }

}
