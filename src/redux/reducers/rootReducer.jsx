import { Types } from "../types/Types"

const initialState = {

    isLogged: false,
    initialData: []

}

export const rootReducer = ( state = initialState, action )=>{

    switch (action.type) {
        case Types.Loggin:
            return {
                ...state,
                isLogged: true,
                infoUser: action.payload
            }
        
        case Types.InitialRequest:
            return {
                ...state,
                initialData: [...state.initialData, action.payload]
            }
        
        case Types.Error:
            return {
                ...state,
                DisplayError: action.payload
            }

        case Types.Filter:
           

            return {
                ...state,
                 dataFiltered: state.initialData.filter(item => 
                    item.types[0].type.name === action.payload)
                
            }
            
        case Types.Reset:
            return{
                ...state,
                dataFiltered:[]
            }

        case Types.Single:
            return{
                ...state,
                singlePoke: state.initialData.filter( pokemon => pokemon.id === action.payload) 
            }

        case Types.Search:
            return{
                ...state,
                singlePoke: state.initialData.filter( pokemon => pokemon.name === action.payload)
                
            }

        default:
            return state;
    }

}