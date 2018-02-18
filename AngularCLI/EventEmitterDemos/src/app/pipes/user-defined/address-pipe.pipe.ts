import { Pipe, PipeTransform } from '@angular/core';
import { AddressModel } from '../../models/address-model';

@Pipe({
  name: 'addressPipe'
})
export class AddressPipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log(value);
    console.log(args);
    var addr= value as AddressModel;

    return `${addr.addressLine1}, ${addr.adrdessLine2}, ${addr.city} - ${addr.state} - ${addr.pin}`;
  }

}
