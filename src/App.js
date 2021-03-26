import React from "react";
import { Switch, Route } from "react-router-dom";

//components
import SearchPage from "./components/SearchPage";
import HomePage from "./components/HomePage";
import DrinkDetailed from "./components/DrinkDetailed";

//style
import { Grid, makeStyles } from "@material-ui/core"

const useStyles = makeStyles({
  root: {
    fontFamily: 'roboto, sans-serif'
  }
});

function App() {

  const classes = useStyles();

  return (
    <Grid 
    className={classes.root}
    container
    direction="column"
    alignItems="center"
    
    >
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/search/:id" component={DrinkDetailed} />
        <Route path="/search" component={SearchPage} />
      </Switch>
    </Grid>
  );
}

export default App;
