import React from 'react';
import { Grid } from "@material-ui/core";

//components
import Form from "./Form";
import Drinks from "./Drinks";

const SearchPage = () => {
    return ( 
    <Grid item>
        <Form />
        <Drinks />
    </Grid>
    );
}
 
export default SearchPage;