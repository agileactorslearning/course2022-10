import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural',
  templateUrl: './structural.component.html',
  styleUrls: ['./structural.component.scss']
})
export class StructuralComponent implements OnInit {

  constructor() { }

  public isCustomer: boolean = false;
  public customers: string[] = ['Giannis', 'Kostas', 'Yiouli', 'Dimos', 'Nikos']

  ngOnInit(): void {

  }

  public toggleCustomer() {
    this.isCustomer = !this.isCustomer;
  }
}