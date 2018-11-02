//THIS CODE WILL RETURN A SUBSET OF AN ARRAY OF ITEMS IF ANY ITEM CONTAINS THE searchText STRING.
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})

export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {

    if (!items) return [];
    if (!searchText) return items;
    searchText = searchText.toLowerCase();

    return items.filter(names => {
      return names.toLowerCase().includes(searchText);
    });
  }
}