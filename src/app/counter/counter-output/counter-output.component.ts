import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CounterState } from '../state/counter.state';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-counter-output',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter-output.component.html',
  styleUrl: './counter-output.component.css'
})
export class CounterOutputComponent {
  //@Input() counter!:number;
  //counter : number=0;
  counter$!: Observable<CounterState>;
  constructor(private store:Store<{counter:CounterState}>) { }
  
  ngOnInit(): void {
    // this.store.select('counter').subscribe((data)=>{
    //   console.log(data);
    //   this.counter=data.counter;
    // })
    this.counter$ = this.store.select('counter');
  } 
}
