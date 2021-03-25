import React from "react";
import { useHistory } from "react-router-dom";

import { Grid, Typography, Button, makeStyles } from "@material-ui/core";

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
})
  

const HomePage = props => {
    
    const { push } = useHistory();
    const classes = useStyles();

    return (
    <>
    <Grid container
        direction="column"
        alignItems="center"
    >
        <Typography variant="h3" className={classes.mainHeader}>Search from TheCocktailDB API</Typography>
        <Button className={classes.button} variant="contained"><a className={classes.aTag} href="https://www.thecocktaildb.com/" target="blank">About the API</a></Button>
        <Button variant="contained" onClick={() => push("/search")}>Go to search</Button>
    </Grid>
    </>
    );
}

export default HomePage;