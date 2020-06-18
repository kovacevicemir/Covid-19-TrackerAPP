import React from 'react'
import styles from './Cards.module.css'
import { Card, CardContent, Typography, Grid, StylesProvider } from '@material-ui/core'

const Cards = (props) => {
    console.log(props)
    return (
        <div className={styles.container}>
            <Grid container spacing = {3} justify = "center">
                <Grid item component = {Card}>
                    <CardContent>
                        <Typography color = "textSecondary" gutterBottom>
                            Infected
                        </Typography>
                        <Typography variant="h5" gutterBottom>
                            REAL DATA
                        </Typography>
                        <Typography color = "textSecondary" gutterBottom>
                            REAL DATE
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                            Number of active cases of COVID-19
                        </Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards
