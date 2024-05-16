//create context

import React, {createContext, useReducer} from 'react'
import AppReducer from './AppReducer';
const initialState = {
    transaction: [
         
        ]
}

//create context
export const GlobalContext = createContext(initialState);

//provider component
export const GlobalProvider = ({children}) => {

    //actions
    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    function addTransaction(transaction) {

        dispatch(
            {
                type: 'ADD_TRANSACTION',
                payload: transaction
            }
        );
    }

    
    const [state, dispatch] = useReducer(AppReducer, initialState);
    return (<GlobalContext.Provider value={{transaction: state.transaction,
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>)
}