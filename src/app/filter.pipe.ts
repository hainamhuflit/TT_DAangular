import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {
  private counter = 0;
  transform(Product: any[], searchText: string): any[] {

    this.counter++;
    if (!Product || !searchText) {
      return Product;
    }
    

    return Product.filter(Product => 
      Product.productName.toLowerCase().indexOf(searchText.toLowerCase()) !== - 1);
    }
}