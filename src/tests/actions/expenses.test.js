import { AddExpense, editExpense, removeExpense } from '../../actions/expenses'

test('removeExpense TestCase',() => {
    const result = removeExpense({id:590});
    expect(result).toEqual({
        type:'REMOVE_EXPENSE',
        id:590
    })
})

test('editExpense testCase', () => {
    const result = editExpense(123,{amount:25})
    expect(result).toEqual({
        type:'EDIT_EXPENSE',
        id:123,
        updates:{amount:25}
    })
});
test('AddExpense testCase with dynamic values', () => {
    const expense = {
                description: 'description',
                note: 'note',
                amount: 'amount',
                createdAt: 'createdAt'
            }
        const result = AddExpense(expense)
        expect(result).toEqual({
            type:'EXPENSE',
            expense:{
                id:expect.any(String),
                description: 'description',
                note: 'note',
                amount: 'amount',
                createdAt: 'createdAt'
            }
        })
    })

test('AddExpense testCase with default values', () => {
        const expense = {
                    description: '',
                    note: '',
                    amount: 1,
                    createdAt: 0
                }
            const result = AddExpense(expense)
            expect(result).toEqual({
                type:'EXPENSE',
                expense:{
                    id:expect.any(String),
                    description: '',
                    note: '',
                    amount: 1,
                    createdAt: 0
                }
            })
        })