import React, { useEffect } from "react";

//route
import { useParams } from "react-router-dom";

//store
import { connect } from "react-redux";
import { fetchDrink } from "../store/actions";

//components
import LoadingDrinkDetailed from "./LoadingDrinkDetailed";
import Ingredients from "./Ingredients"

//hooks
import { useWindowSize } from "../hooks/useWindowSize";

//style
import { Grid, CardActionArea, CardContent, Card, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    cardActionArea: {
        padding: "0"
    },
    cardActionAreaLg: {
        paddingTop: "5rem",
        display: "flex",
        flexFlow: "column wrap",
        justifyContent: "center"
    },
    img: {
        width: "350px",
        borderColor: "black"
    },
    imgLg: {
        width: "550px"
    }
});

const DrinkDetailed = props => {
    
    const { fetchDrink, drink, isLoading, error } = props;
    const { id } = useParams();
    const size = useWindowSize();
    const classes = useStyles();

    useEffect(() => {
      fetchDrink(id);
    }, [fetchDrink]);

    return (
    <>
    <Grid container direction="column" alignItems="center">
    {error && (<Typography variant="h5">{error}</Typography>)}
    {isLoading && (<LoadingDrinkDetailed />)}
    <Card>
        {!isLoading && drink.map(item => (
            <React.Fragment key={id}>
            <Grid key={id} container direction="row" justify="center" alignItems="center">
            <CardActionArea className={size.width < 500 ? classes.cardActionArea : classes.cardActionAreaLg}>
                <img src={item.strDrinkThumb} alt={item.strDrink} className={size.width < 500 ? classes.img : classes.imgLg}/>
            </CardActionArea>
            <CardContent>
                <Grid>
                    <Typography variant="h5">{item.strDrink}</Typography>
                    <Typography>{item.strAlcoholic}</Typography>
                    <Ingredients ingredients={[
                        item.strIngredient1, item.strIngredient2, item.strIngredient3, item.strIngredient4, item.strIngredient5,
                        item.strIngredient6, item.strIngredient7, item.strIngredient8, item.strIngredient9, item.strIngredient10,
                        item.strIngredient11, item.strIngredient12, item.strIngredient13, item.strIngredient14, item.strIngredient15
                    ]}/>
                </Grid>
                <Grid>
                    <Typography variant="h6">Instructions:</Typography>
                    <Typography>{item.strInstructions}</Typography>
                </Grid>
            </CardContent>
            </Grid>
            </React.Fragment>
        ))}
    </Card>
    </Grid>
    </>
    );
}

const mapStateToProps = state => {
  return {
    drink: state.drink.drinks,
    isLoading: state.drink.isLoading,
    error: state.drink.error
  }
}
 
const mapDispatchToProps = () => {
  return {
    fetchDrink
  }
};

export default connect(mapStateToProps, mapDispatchToProps())(DrinkDetailed);
