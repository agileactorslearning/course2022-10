import { Component, Input, OnInit } from '@angular/core';
import { Customer } from '../customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  @Input()
  public customer: Customer = new Customer();
  
  constructor() { }

  ngOnInit(): void {
  }

}
