import React from "react"
import { Typography, Card, CardActionArea, CardContent, makeStyles } from "@material-ui/core"

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
    }
})

const Drink = ({ drink }) => {

    const {strDrink, strDrinkThumb, strAlcoholic, strGlass} = drink;

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
    </Card>
    )
}

export default Drink;
