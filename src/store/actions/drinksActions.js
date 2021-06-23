// import axios from "axios";
import { axiosInstance } from "../../utils/axiosInstance";

export const FETCH_DRINKS_START = "FETCH_DRINKS_START";
export const FETCH_DRINKS_SUCCESS = "FETCH_DRINKS_SUCCESS";
export const FETCH_DRINKS_FAIL = "FETCH_DRINKS_FAIL";

export const FETCH_DRINKS_BY_ID_SUCCESS = "FETCH_DRINKS_BY_ID_SUCCESS";
export const FETCH_DRINKS_BY_ID_FAIL = "FETCH_DRINKS_BY_ID_FAIL";

export const FETCH_RANDOM_DRINK_START = "FETCH_RANDOM_DRINK_START";
export const FETCH_RANDOM_DRINK_SUCCESS = "FETCH_RANDOM_DRINK_SUCCESS";
export const FETCH_RANDOM_DRINK_FAIL = "FETCH_RANDOM_DRINK_FAIL";

export const fetchDrinks = drinkName => async dispatch => {
  dispatch({ type: FETCH_DRINKS_START });
  try {
    const res = await axiosInstance().get(`/api/json/v1/1/search.php?s=${drinkName}`);

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
    const { data: { drinks } } = await axiosInstance().get(`/api/json/v1/1/lookup.php?i=${id}`);
    
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
          error: `No drink of id ${id} was found`
        }
      });
    }

  } catch (err) {
    dispatch({
      type: FETCH_DRINKS_BY_ID_FAIL, 
      payload: 'An error occured with the server'
    });
  
  }
}

export const fetchRandomDrink = () => async dispatch => {
  dispatch({
    type: FETCH_RANDOM_DRINK_START 
  });
  
  try {
    const { data: { drinks } } = await axiosInstance().get(`/api/json/v1/1/random.php`);
    dispatch({
      type: FETCH_RANDOM_DRINK_SUCCESS,
      payload: {
        drinksData: drinks 
      }
    });

  } catch (err) {
    dispatch({
      type: FETCH_RANDOM_DRINK_FAIL 
    });
  }
}