import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { customIncrement } from '../state/counter.action';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-counter-custom',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './counter-custom.component.html',
  styleUrl: './counter-custom.component.css'
})
export class CounterCustomComponent {
  counter: number = NaN;
  name: string = '';
  constructor(private store:Store<{counter:CounterState}>) { }

  ngOnInit(): void {
    this.store.select('counter').subscribe((data)=>{
      this.name = data.name;
    })
  }
  add() {
    this.store.dispatch(customIncrement({ value: this.counter }));
  }


}
