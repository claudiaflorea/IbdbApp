import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Category } from '../models/category';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private BASE_URL = 'http://localhost:8090/category/';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getCategories() {
    return this.http.get(this.BASE_URL + 'all').pipe(map((res: Category[]) => res ));
  }

  getCategoryById(categoryId: string) {
    return this.http.get(this.BASE_URL + categoryId)
      .pipe(map((res: Category) => res ));
  }

  insertCategory(category: Category) {
    return this.http.post<Category>(this.BASE_URL + 'add', JSON.stringify(category), this.httpOptions)
      .pipe(map((resp: any) => resp ));
  }

  updateCategory(category: Category) {
    return this.http.put<Category>(this.BASE_URL + 'update', JSON.stringify(category), this.httpOptions)
      .pipe(map((resp: any) => resp ));
  }

  deleteCategory(category: Category) {
    return this.http.delete(this.BASE_URL + 'delete/' + category.id, this.httpOptions)
      .pipe(map((resp: any) => resp ));
  }
}
