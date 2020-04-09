import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userName'
})
export class UserNamePipe implements PipeTransform {

  transform(str: string, name: string, position: string = 'end'): string {
    if (position === 'start') {
      return name + ', ' + str.toLowerCase();
    } else if (position === 'end') {
      return str + ', ' + name;
    }
  }

}
