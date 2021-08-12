import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Typography, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    title: {
        color: '#b1a21e',
        fontWeight: '500',
        fontSize: '24px',
        lineHeight: '36px',
        textTransform: 'uppercase',
        letterSpacing: '0.1px',
    }
})

const FilmView = props => {
    const { name, quantity } = props;
    const data = props.data ? props.data.slice(0, quantity) : [];

    const styles = useStyles();

    return (
        <>
            <Typography className={styles.title} variant='h4'>{name}</Typography>
            <hr/>
            <Grid container spacing={2}>
                <Grid item xs={2}>
                    {
                        data.map((item, index) => (
                            <div key={index}>{item.title}</div>
                        ))
                    }
                </Grid>
            </Grid>
        </>
    )
}

FilmView.propTypes = {
    name: PropTypes.string,
    data: PropTypes.array,
    quantity: PropTypes.number,
}

export default FilmView
