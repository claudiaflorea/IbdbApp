import { Subcategory } from './subcategory';

export class Category {
  id: number;
  categoryName: string;
  subcategories: Subcategory[];
}
