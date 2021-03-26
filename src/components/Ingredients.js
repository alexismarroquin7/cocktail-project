import React from "react";

import { Typography } from "@material-ui/core";

const Ingredients = ({ ingredients }) => {

    return (
    <>
    <Typography variant="h6">Ingredients:</Typography>
    {ingredients[0] && <Typography>- {ingredients[0]}</Typography>}
    {ingredients[1] && <Typography>- {ingredients[1]}</Typography>}
    {ingredients[2] && <Typography>- {ingredients[2]}</Typography>}
    {ingredients[3] && <Typography>- {ingredients[3]}</Typography>}
    {ingredients[4] && <Typography>- {ingredients[4]}</Typography>}
    {ingredients[5] && <Typography>- {ingredients[5]}</Typography>}
    {ingredients[6] && <Typography>- {ingredients[6]}</Typography>}
    {ingredients[7] && <Typography>- {ingredients[7]}</Typography>}
    {ingredients[8] && <Typography>- {ingredients[8]}</Typography>}
    {ingredients[9] && <Typography>- {ingredients[9]}</Typography>}
    {ingredients[10] && <Typography>- {ingredients[10]}</Typography>}
    {ingredients[11] && <Typography>- {ingredients[11]}</Typography>}
    {ingredients[12] && <Typography>- {ingredients[12]}</Typography>}
    {ingredients[13] && <Typography>- {ingredients[13]}</Typography>}
    {ingredients[14] && <Typography>- {ingredients[14]}</Typography>}
    </>    
    );
}
 
export default Ingredients;
