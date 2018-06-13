export const expensesReducer = (state=[],action) => {
    switch(action.type){
        case 'EXPENSE':
            return [...state,action.expense];
        case 'REMOVE_EXPENSE':
           // console.log('deleting expense',action.id);
            return (state.filter((item)=>{
                if(item.id!=action.id)
                    return item;
            }))
        case 'EDIT_EXPENSE':
            console.log(action.id, action.updates);
            return state.map((expense)=>{
                if(expense.id===action.id)
                    return {...expense,...action.updates}
                return expense;
            })
        default:
        return state;
    }
}