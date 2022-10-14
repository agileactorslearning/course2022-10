import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-random-names',
  templateUrl: './random-names.component.html',
  styleUrls: ['./random-names.component.scss']
})
export class RandomNamesComponent implements OnInit {
  @Input()
  public dayOfWeek: string =''

  public dishes: string[] = [];
  public todaysDish: string ='';
  public name: string = '';

  constructor() {

  }
  
  ngOnInit(): void {
    this.name = 'Δοκιμή binding';
    //this.updateDish();
  }

  public updateName(): void {
    //return 'test1';
    this.name = 'test1';
    //return '';
  }

  public test() {
    let a = this.name;
    debugger;
  }

  public updateDish(): void {
    //debugger;
    // console.log('inside updateDish()')
    // this.dishes = [ 'Αβγά ποσέ', 'Κοτόπουλο με κάρυ', 'Μακαρόνια με κιμά', 'Μακαρόνια με σάλτσα', 'Σούσι', 'Σουβλάκι'];
    // let randomNumberDecimal01 = Math.random();
    // let randomNumberInteger = randomNumberDecimal01 * (this.dishes.length - 1);
    // let randomIndex = Math.floor(randomNumberInteger);
    // this.todaysDish = this.dishes[randomIndex];
  }
}
