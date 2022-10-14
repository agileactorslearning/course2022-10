import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-example',
  templateUrl: './pipes-example.component.html',
  styleUrls: ['./pipes-example.component.scss']
})
export class PipesExampleComponent implements OnInit {

  public oilPricePerLiter = 1.989;
  public oilVolume = 51.456;

  public today: Date = new Date();
  
  public amount: number = 0;
    constructor() { }

  ngOnInit(): void {
    this.amount = this.oilPricePerLiter * this.oilVolume;
  }
}
