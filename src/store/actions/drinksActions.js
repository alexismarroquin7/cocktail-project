import axios from "axios";

export const FETCH_DRINKS_START = "FETCH_DRINKS_START"
export const FETCH_DRINKS_SUCCESS = "FETCH_DRINKS_SUCCESS"
export const FETCH_DRINKS_BY_ID_SUCCESS = "FETCH_DRINKS_BY_ID_SUCCESS"
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

export const fetchDrink = id => dispatch => {
    dispatch({ type: FETCH_DRINKS_START });
    axios
        .get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then(res => {
            dispatch({ type: FETCH_DRINKS_BY_ID_SUCCESS, payload: { drinksData: res.data.drinks } });
        })
        .catch(err => {
            // dispatch({ type: FETCH_DRINKS_FAIL, payload: '404 Error' })
            console.log(err)
        });
}