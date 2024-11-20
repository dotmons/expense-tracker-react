import { createSlice, configureStore } from '@reduxjs/toolkit'


const counterSlice = createSlice({
    name: 'Counter',
    initialState: {
        transactions: [
            { id: 1, text: 'Flower', amount: -20 },
            { id: 2, text: 'Salary', amount: 300 },
            { id: 3, text: 'Book', amount: -10 },
            { id: 4, text: 'Camera', amount: 150 }
        ],
        value: 0
    },
    reducers: {
        increment: state => {
            state.value += 1;

            const transaction = state.transactions.find(transaction => transaction.id ===1);
            if (transaction){
                transaction.amount += 50;
            }
        },
        decrement: state => {
            state.value -= 1;
        },
        deleteTransaction: (state, action) =>{
            state.transactions = state.transactions.filter(trans => trans.id !== action.payload.id);
        }
        
    }
})

export const {deleteTransaction} = counterSlice.actions

export const store = configureStore({
    reducer: counterSlice.reducer
})

store.subscribe(() => console.log('Current value ', store.getState()))

store.dispatch(deleteTransaction({id: 1}));
store.dispatch(deleteTransaction({id: 1}));
