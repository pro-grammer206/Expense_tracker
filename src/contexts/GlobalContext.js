import {createContext,useReducer} from 'react'


const initalState = {
    transactions:[],
    showHistory:false
}


export const GlobalContext = createContext()
function AppReducer(state,action){
        switch(action.type){
        case 'DELETE':
            return{
                ...state,
                transactions:state.transactions.filter(transaction=>transaction.id!==action.payload)
            }
        case 'ADD':
            return{
                ...state,
                transactions:[action.payload,...state.transactions]
            }
        case 'TOGGLE':
            return{
                ...state,
                showHistory:!state.showHistory
            }

        default:
            return state;
    }
}

export function GlobalProvider({children}){
    const [state,dispatch] = useReducer(AppReducer,initalState)

     const deleteTransaction= (id)=>{
        dispatch({
            type:'DELETE',
            payload:id
        });
    }
   const addTransaction=(transaction)=>{
        dispatch({
            type:'ADD',
            payload:transaction
        });
    }
    const toggleHistory = ()=>{
        dispatch({type:'TOGGLE'})
    }


    return(
        <GlobalContext.Provider value={{
            transactions:state.transactions,
            deleteTransaction,addTransaction,toggleHistory
        }}>
            {children}
        </GlobalContext.Provider>
    )

}