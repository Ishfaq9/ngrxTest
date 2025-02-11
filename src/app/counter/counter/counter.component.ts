import { Component } from '@angular/core';
import { CounterOutputComponent } from "../counter-output/counter-output.component";
import { CounterButtonsComponent } from '../counter-buttons/counter-buttons.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from '../state/counter.reducer';
import { CounterCustomComponent } from "../counter-custom/counter-custom.component";

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CounterOutputComponent, CounterButtonsComponent, CounterOutputComponent, CounterCustomComponent],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {

  //counter: number = 0;
  // OnIncrement() {
  //   this.counter++;
  // }

  // OnDecrement() {
  //   this.counter--;
  // }
  // onReset() {
  //   this.counter = 0;
  // }

  constructor() { }

}
