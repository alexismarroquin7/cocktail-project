import axios from "axios";

export const FETCH_DRINKS_START = "FETCH_DRINKS_START"
export const FETCH_DRINKS_SUCCESS = "FETCH_DRINKS_SUCCESS"
export const FETCH_DRINKS_BY_ID_SUCCESS = "FETCH_DRINKS_BY_ID_SUCCESS"
export const FETCH_DRINKS_BY_ID_FAIL = "FETCH_DRINKS_BY_ID_FAIL"
export const FETCH_DRINKS_FAIL = "FETCH_DRINKS_FAIL"

export const fetchDrinks = drinkName => async dispatch => {
  dispatch({ type: FETCH_DRINKS_START });
  try {
    const res = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkName}`);

    dispatch({
      type: FETCH_DRINKS_SUCCESS,
      payload: {
        drinksData: res.data.drinks,
        drinkName 
      }
    });
  
  } catch (err) {
    dispatch({
      type: FETCH_DRINKS_FAIL,
      payload: err.message 
    });
  }
}

export const fetchDrink = id => async dispatch => {
  dispatch({ type: FETCH_DRINKS_START });
  try {
    const { data: { drinks } } = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
    
    if(drinks){
      dispatch({
        type: FETCH_DRINKS_BY_ID_SUCCESS,
        payload: {
          drinksData: drinks
        }
      });
    } else {
      dispatch({
        type: FETCH_DRINKS_BY_ID_FAIL,
        payload: {
          drinksData: drinks
        }
      });
    }

  } catch (err) {
    console.log(err.response);
    dispatch({ type: FETCH_DRINKS_BY_ID_FAIL, payload: '404 Error' })
  }
}