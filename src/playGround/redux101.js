import { createStore } from 'redux';

console.log("Ohhh my god!!! redux101 is running...")
const INITIAL_STATE = {
    count:0
}
const store=createStore((state=INITIAL_STATE, action)=> {
    switch(action.type){
        case 'INCREMENT':
        //const incrementBy=typeof action.incrementBy === 'number'? action.incrementBy:1
        return {
            count:state.count+action.incrementBy
        };
        case 'DECREMENT':
        //const decrementBy=typeof action.decrementBy === 'number'? action.decrementBy:1
        return {
            count:state.count-action.decrementBy
        };
        case 'RESET':return {
            count:0
        };
        case 'SET':return {
            count:action.count
        }
        default:
        return state;
    }
    
});

const unsubscribe=store.subscribe(()=>{
    console.log(store.getState());
})
const incrementActionGenerator = ({incrementBy = 1} = {}) => (
    {
        type:'INCREMENT',
        incrementBy
    }
);
const decrementActionGenerator = ({decrementBy = 1} = {}) => (
    {
        type:'DECREMENT',
        decrementBy
    }
);
const resetActionGenerator = (
    {
        type:'RESET',
    }
);
const setActionGenerator = ({count}) => ({
    type:'SET',
    count
})
store.dispatch(incrementActionGenerator({incrementBy:5}))
store.dispatch(incrementActionGenerator())
store.dispatch(resetActionGenerator);
store.dispatch(setActionGenerator({count:10}));
store.dispatch(decrementActionGenerator({decrementBy:10}));
store.dispatch(decrementActionGenerator());

// store.dispatch({
//     type:'INCREMENT',
//     incrementBy:5
// });
// store.dispatch({
//     type:'INCREMENT'
// });
//unsubscribe();
// store.dispatch({
//     type:'RESET'
// });
// store.dispatch({
//     type:'DECREMENT',
//     decrementBy:5
// });
// store.dispatch({
//     type:'SET',
//     value:100
// })

//console.log('value is store is: ',store.getState());


