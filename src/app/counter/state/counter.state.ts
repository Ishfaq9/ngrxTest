export interface CounterState{
    counter : number;
    name:string;
    newName:string;
}

export const initialState :CounterState={
    counter: 4,
    name : 'Ishfaq Rahman',
    newName : 'Afif hossain'
}