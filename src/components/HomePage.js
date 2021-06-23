// React:
import React, { useEffect } from "react";

// router:
import { useHistory } from "react-router-dom";

// store:
import { useSelector, useDispatch } from "react-redux";
import { fetchRandomDrink } from "../store";

// components:
import LoadingDrinkDetailed from "./LoadingDrinkDetailed";

// style:
import { Grid, Typography, Button, Card, CardContent, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  mainHeader: {
    textAlign: "center"
  },
  aTag: {
    textDecoration: "none",
    color: "black"
  },
  button: {
    marginBottom: "1rem"
  }
});


const HomePage = () => {
  const drinkState = useSelector(state => state.drink);
  
  const { isLoading, drinks, error } = drinkState;
  
  const dispatch = useDispatch();
  
  const { push } = useHistory();
  const classes = useStyles();
  
  useEffect(() => dispatch(fetchRandomDrink()), []);
  
  return (<>
  <Grid container direction="column" alignItems="center">
    <Typography variant="h3" className={classes.mainHeader}>Search from TheCocktailDB API</Typography>
    <Button className={classes.button} variant="contained"><a className={classes.aTag} href="https://www.thecocktaildb.com/" target="blank">About the API</a></Button>
    <Button variant="contained" onClick={() => push("/search")}>Search for drinks</Button>
      {error && (
        <Typography>{error}</Typography>
      )}
      {isLoading && (
        <LoadingDrinkDetailed />
      )}
  </Grid>
  </>);
}

export default HomePage;