import React from "react";
import { Switch, Route } from "react-router-dom";
import { useHistory } from "react-router-dom";
//components
import SearchPage from "./components/SearchPage";

//style
import {Grid, makeStyles, Typography, Button} from "@material-ui/core"

const useStyles = makeStyles({
  root: {
    fontFamily: 'roboto, sans-serif'
  },
  aTag: {
    textDecoration: "none",
    color: "black"
  },
  button: {
    marginBottom: "1rem"
  }
})

function App() {

  const { push } = useHistory();
  const classes = useStyles();

  return (
    <Grid 
    className={classes.root}
    container
    direction="column"
    alignItems="center"
    
    >
      <Switch>
        <Route exact path="/">
          <Typography variant="h3">Search from TheCocktailDB API</Typography>
          <Grid container
          direction="column"
          alignItems="center"
          >
          <Button className={classes.button} variant="contained"><a className={classes.aTag} href="https://www.thecocktaildb.com/" target="blank">About the API</a></Button>
          <Button variant="contained" onClick={() => push("/search")}>Go to search</Button>
          </Grid>
        </Route>
        <Route path="/search" component={SearchPage}/>
      </Switch>
    </Grid>
  );
}

export default App;
