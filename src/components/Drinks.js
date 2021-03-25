import React, { useEffect } from "react";

import { connect } from "react-redux";
import { fetchDrinks } from "../store/actions"

import Drink from "./Drink"

import { Grid, Typography, makeStyles } from "@material-ui/core"

const useStyles = makeStyles({
    isLoading: {
        marginBottom: "2%"
    },
    error: {
        marginBottom: "2%",
        color: "red"
    }
})

const Drinks = (props) => {
    const { fetchDrinks } = props;

    const classes = useStyles();
    
    useEffect(() => {
        fetchDrinks("margarita")
    }, [fetchDrinks]);

    return (
    <>
    <Grid
    container
    direction="column"
    alignItems="center"
    >
    {props.isLoading ? <Typography className={classes.isLoading} varitant="body1">Loading Drinks...</Typography> : null}
    {props.error ? <Typography className={classes.error} >{props.error}</Typography> : null}
    </Grid>
    <Grid
    container
    direction="row"
    justify="space-evenly">
    {props.drinks.map(drink => (
        <Drink key={drink.idDrink} drink={drink}/>
    ))}
    </Grid>
    </>
    )
}

const mapStateToProps = (state) => {
    return {
        drinks: state.drinks,
        isLoading: state.isLoading,
        error: state.error,
        drinkName: state.drinkName
    }
}

export default connect(mapStateToProps, { fetchDrinks })(Drinks);