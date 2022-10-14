import { Component, OnInit } from '@angular/core';
import {Customer} from '../customer';
import { CustomerService } from '../customer-service.service';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.scss']
})
export class CustomersListComponent implements OnInit {

  public customers: Customer[] = [];

  constructor(private customerService: CustomerService) 
  { 
    this.customers = this.customerService.getAllCustomers();
  }

  ngOnInit(): void {
  }
}
