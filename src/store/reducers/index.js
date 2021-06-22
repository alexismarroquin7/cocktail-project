import {
  FETCH_DRINKS_START, 
  FETCH_DRINKS_SUCCESS, 
  FETCH_DRINKS_BY_ID_SUCCESS, 
  FETCH_DRINKS_BY_ID_FAIL,
  FETCH_DRINKS_FAIL
} from "../actions";

const initialState = {
    drinkName: 'margarita',
    drinks: [],
    isLoading: false,
    error: ''
}

export const reducer = (state = initialState, action) => {
  switch(action.type){
    case FETCH_DRINKS_START:
      return {
        ...state,
        isLoading: true
      }
    case FETCH_DRINKS_SUCCESS:
      if(!action.payload.drinksData){
        return {
            ...state,
            drinks: [],
            isLoading: false,
            error: `No drinks named '${action.payload.drinkName}' were found.`
        }
      }
      return {
        ...state,
        isLoading: false,
        error: '',
        drinks: action.payload.drinksData,
        drinkName: action.payload.drinkName
      }
    
    case FETCH_DRINKS_BY_ID_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: '',
        drinks: action.payload.drinksData,
        drinkName: state.drinkName
      }
    
    case FETCH_DRINKS_BY_ID_FAIL:
      return {
        ...state,
        drinks: [],
        isLoading: false,
        error: action.payload.error
      }
      
    case FETCH_DRINKS_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    
    default:
      return state;
  }
}