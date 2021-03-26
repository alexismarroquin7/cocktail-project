import React from "react";

//router
import { Link } from "react-router-dom";

//style
import { Typography, Card, CardActionArea, CardContent, CardActions, Button, Grid, makeStyles } from "@material-ui/core"

const useStyles = makeStyles({
    card: {
        marginTop: "1rem",
        marginBottom: "1rem"
    },
    cardActionArea: {
        display:"flex",
        flexFlow: "column wrap",
        alignItems: "center"
    },
    drinkImage: {
        width: "230px"
    },
    link: {
        color: "black",
        textDecoration: "none"
    }
})

const Drink = ({ drink }) => {

    const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } = drink;

    const classes = useStyles();

    return (
    <Card className={classes.card}>
        <CardActionArea className={classes.cardActionArea}>
            <img className={classes.drinkImage} alt={strDrink} title={strDrink} src={strDrinkThumb}/>
        </CardActionArea>
        <CardContent>
            <Typography>{strDrink}</Typography>
            <Typography>{strAlcoholic}</Typography>
            <Typography>Glass: {strGlass}</Typography>
        </CardContent>
        <CardActions>
            <Grid container direction="column" alignItems="center">
                <Link className={classes.link} to={`/search/${idDrink}`}>
                <Button>Details</Button>
                </Link>
            </Grid>
        </CardActions>
    </Card>
    )
}

export default Drink;
