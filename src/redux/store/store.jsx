
import { createStore, combineReducers } from "redux"
import { rootReducer } from "../reducers/rootReducer"



const reducers = combineReducers({

    rootReducer: rootReducer,
})

export const store = createStore(

    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    
)
