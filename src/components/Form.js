import React, { useState } from "react";

//store
import { connect } from "react-redux";

//action creators
import { fetchDrinks } from "../store/actions"

//style
import { TextField, Button, Grid, makeStyles } from "@material-ui/core";


const useStyles = makeStyles({
    form: {
        marginBottom: "2%"
    },
    textField: {
        minWidth: "420px"
    }
})

const Form = (props) => {

    const [searchTerm, setSearchTerm] = useState('');

    const classes = useStyles();

    const handleChange = e => {
        setSearchTerm(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();
        if(searchTerm === '') return;
        props.fetchDrinks(searchTerm)
        setSearchTerm('')
    }

    return (
    <>
    <form onSubmit={handleSubmit} className={classes.form}>
        <Grid container
        direction="column"
        alignItems="center"
        >
        <TextField 
            className={classes.textField}
            label="Enter a drink name:"
            helperText={`i.e. '${props.drinkName}'`}
            type="text"
            value={searchTerm}
            onChange={handleChange}
            variant="filled"
        />
        <Button type="submit" variant="contained" size='small'>Fetch Drinks</Button>
        </Grid>
    </form>
    </>
    )
}

const mapStateToProps = (state) => {
    return {
        drinkName: state.drinkName
    }
}

export default connect(mapStateToProps, { fetchDrinks })(Form);
