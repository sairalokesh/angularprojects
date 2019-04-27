import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchreaturants'
})
export class SearchPipe implements PipeTransform {

  transform(resturants: any, searchText: any): any {
    if (searchText == null) {
      return resturants;
    }

    return resturants.filter(function(resturnat) {
      return resturnat.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1 ||
      resturnat.address.toLowerCase().indexOf(searchText.toLowerCase()) > -1 ||
      resturnat.deal.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
    });
  }

}
