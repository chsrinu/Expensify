import uuid from 'uuid';

export const AddExpense = ({
    description = 'testDescription',
    note = 'testNote',
    amount = 1,
    createdAt = 0
    } = {}
) => (
        {
            type: 'EXPENSE',
            expense : {
                id: uuid(),
                description: description,
                note: note,
                amount: amount,
                createdAt: createdAt
            }
        }
    )
export const editExpense = (id,updates) => (
    {
        type:'EDIT_EXPENSE',
        id:id,
        updates:updates
    }
)
export const removeExpense = ({id}) => {
    console.log(id);
    return {
        type: 'REMOVE_EXPENSE',
        id: id
    }
}