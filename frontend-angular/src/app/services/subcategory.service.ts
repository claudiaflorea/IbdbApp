import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subcategory } from '../models/subcategory';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SubcategoryService {

  private BASE_URL = 'http://localhost:8090/subcategory/';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getSubcategories() {
    return this.http.get(this.BASE_URL + 'all').pipe(map((res: Subcategory[]) => res ));
  }

  getListedSubcategoriesByCategoryId(categoryId: string) {
    return this.http.get(this.BASE_URL + 'all/listed/' + categoryId)
      .pipe(map((res: Subcategory[]) => res ));
  }

  getSubcategoryById(subcategoryId: string) {
    return this.http.get(this.BASE_URL + subcategoryId)
      .pipe(map((res: Subcategory) => res ));
  }

  insertSubcategory(subcategory: Subcategory) {
    return this.http.post<Subcategory>(this.BASE_URL + 'add', JSON.stringify(subcategory), this.httpOptions)
      .pipe(map((resp: any) => resp ));
  }

  updateSubcategory(subcategory: Subcategory) {
    return this.http.put<Subcategory>(this.BASE_URL + 'update', JSON.stringify(subcategory), this.httpOptions)
      .pipe(map((resp: any) => resp ));
  }

  deleteSubcategory(subcategory: Subcategory) {
    return this.http.delete(this.BASE_URL + 'delete/' + subcategory.id, this.httpOptions)
      .pipe(map((resp: any) => resp ));
  }
}
