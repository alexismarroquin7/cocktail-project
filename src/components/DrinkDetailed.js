import React, { useEffect } from "react";

//route
import { useParams } from "react-router-dom";

//store
import { connect } from "react-redux";
import { fetchDrink } from "../store/actions";

//style
import { Grid, CardActionArea, CardContent, Card, Typography } from "@material-ui/core";

const DrinkDetailed = props => {
    
    const { fetchDrink, drink, isLoading } = props;
    const { id } = useParams();

    useEffect(() => {
        fetchDrink(id);
    }, [fetchDrink]);

    return (
    <>
    <Card>
        <Grid container direction="row" alignItems="center">

        {isLoading 
        
        ? (<CardContent>
            <Typography variant="h5">Loading Drink...</Typography>
            </CardContent>)
        
        : drink.map(item => (
            <>
            <CardActionArea>
                <img src={item.strDrinkThumb} alt={item.strDrink} width="400px"/>
            </CardActionArea>
            <CardContent>
                <Typography>{item.strDrink}</Typography>
                <Typography>{item.strAlcoholic}</Typography>
                <Typography>Ingredients:</Typography>
                {item.strIngredient1 !== null && item.strIngredient1 !== '' && <Typography>- {item.strIngredient1}</Typography>}
                {item.strIngredient2 !== null && item.strIngredient2 !== '' && <Typography>- {item.strIngredient2}</Typography>}
                {item.strIngredient3 !== null && item.strIngredient3 !== '' && <Typography>- {item.strIngredient3}</Typography>}
                {item.strIngredient4 !== null && item.strIngredient4 !== '' && <Typography>- {item.strIngredient4}</Typography>}
                {item.strIngredient5 !== null && item.strIngredient5 !== '' && <Typography>- {item.strIngredient5}</Typography>}
                {item.strIngredient6 !== null && item.strIngredient6 !== '' && <Typography>- {item.strIngredient6}</Typography>}
                {item.strIngredient7 !== null && item.strIngredient7 !== '' && <Typography>- {item.strIngredient7}</Typography>}
                {item.strIngredient8 !== null && item.strIngredient8 !== '' && <Typography>- {item.strIngredient8}</Typography>}
                {item.strIngredient9 !== null && item.strIngredient9 !== '' && <Typography>- {item.strIngredient9}</Typography>}
                {item.strIngredient10 !== null && item.strIngredient10 !== '' && <Typography>- {item.strIngredient10}</Typography>}
                {item.strIngredient11 !== null && item.strIngredient11 !== '' && <Typography>- {item.strIngredient11}</Typography>}
                {item.strIngredient12 !== null && item.strIngredient12 !== '' && <Typography>- {item.strIngredient12}</Typography>}
                {item.strIngredient13 !== null && item.strIngredient13 !== '' && <Typography>- {item.strIngredient13}</Typography>}
                {item.strIngredient14 !== null && item.strIngredient14 !== '' && <Typography>- {item.strIngredient14}</Typography>}
                {item.strIngredient15 !== null && item.strIngredient15 !== '' && <Typography>- {item.strIngredient15}</Typography>}
            </CardContent>
            </>
        ))}
    
        </Grid>
    </Card>
    </>
    );
}

const mapStateToProps = state => {
    return {
        drink: state.drinks,
        isLoading: state.isLoading
    }
}
 
const mapDispatchToProps = () => {
    return {
        fetchDrink
    }
};

export default connect(mapStateToProps, mapDispatchToProps())(DrinkDetailed);
