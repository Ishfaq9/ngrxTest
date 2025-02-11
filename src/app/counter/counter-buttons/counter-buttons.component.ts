import { Component, EventEmitter, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../state/counter.action';


@Component({
  selector: 'app-counter-buttons',
  standalone: true,
  imports: [],
  templateUrl: './counter-buttons.component.html',
  styleUrl: './counter-buttons.component.css'
})
export class CounterButtonsComponent {

  // @Output() increment = new EventEmitter<void>();
  // @Output() decrement = new EventEmitter<void>();
  // @Output() reset = new EventEmitter<void>();

  constructor(private store:Store<{counter :{counter:number}}>) { }
  onReset() {
    ////this.reset.emit();
    this.store.dispatch(reset());
  }
  onDecrement() {
    ///this.decrement.emit();
    this.store.dispatch(decrement());
  }
  onIncrement() {
    this.store.dispatch(increment());
  }

}
