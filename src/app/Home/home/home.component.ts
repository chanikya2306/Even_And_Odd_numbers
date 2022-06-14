import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  even_numbers: any = [];
  odd_numbers: any = [];

  constructor() { }

  ngOnInit(): void {
    this.evenNumber();
    // this.oddNumber();


  }
  evenNumber() {
    for (let i = 0; i <= 10; i++) {
      if (i % 2 == 0) {
        this.even_numbers.push(i)

      }
      // else if (i % 2 == 1) {
      //   this.odd_numbers.push(i)
      // }
      else {
        this.odd_numbers.push(i)
      }
    }
    console.log(this.even_numbers);
    console.log(this.odd_numbers)

  }

  // oddNumber() {
  //   for (let j = 0; j <= 100; j++) {
  //     if (j % 2 == 1) {
  //       console.log(j)
  //     }
  //   }
  // }

}
