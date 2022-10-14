import { Injectable } from '@angular/core';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor() { }

  public getAllCustomers(): Customer[]{
    return [];
  }
}
