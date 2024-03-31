import { Component } from "@angular/core";

@Component({
  selector: "app-counter",
  template: `
    <h3>Counter: {{ counter }}</h3>

    <button (click)="changeNumberBy(+1)">+1</button>
    <button (click)="resetNumber()">reset</button>
    <button (click)="changeNumberBy(-1)">-1</button>


  `
})
export class CounterComponent {

  public counter: number = 10;

  changeNumberBy(value: number): void {

    this.counter = this.counter + value;

  }

  resetNumber(): void {
    this.counter = 10;
  }

}
