import { createAction, props } from '@ngrx/store';

export const increment = createAction('incerement');
export const decrement = createAction('decrement');
export const reset = createAction('reset');
export const customIncrement  = createAction('customIncrement', props<{value:number}>());