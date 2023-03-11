import { Box, Button, Grid, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import img_1 from '../images/img_1.jpg'
import MainBlockBox from './MainBlockBox'

export default function MainBlock() {
    return (
        <Box sx={{ mt: 10, border: '1px solid lightgrey', display: { xs: 'none', sm: 'none', md: 'flex' } }}>
            <Grid container spacing={0}>
                <Grid xs={4} sx={{
                    backgroundImage: `url(${img_1})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '280px',

                }}>

                    <Stack sx={{ ml: 3, mt: 3 }}>
                        <Typography variant="h5">Home and</Typography>
                        <Typography variant="h5">outdoor</Typography>
                        <Button variant="outlined" sx={{
                            width: '40%',
                            bgcolor: 'white',
                            color: 'black',
                            mt: 2
                        }}>Source now</Button>
                    </Stack>

                </Grid>
                <Grid container xs={8} spacing={0} colSpacing={0} >
                    <Grid item xs={3} >
                        <MainBlockBox name='Soft chairs' subname='USD 19'></MainBlockBox>
                    </Grid>
                    <Grid item xs={3}>
                        <MainBlockBox name='Soft chairs' subname='USD 19'></MainBlockBox>
                    </Grid>
                    <Grid item xs={3}>
                        <MainBlockBox name='Soft chairs' subname='USD 19'></MainBlockBox>
                    </Grid>
                    <Grid item xs={3}>
                        <MainBlockBox name='Soft chairs' subname='USD 19'></MainBlockBox>
                    </Grid>
                    <Grid item xs={3}>
                        <MainBlockBox name='Soft chairs' subname='USD 19'></MainBlockBox>

                    </Grid>
                    <Grid item xs={3}>
                        <MainBlockBox name='Soft chairs' subname='USD 19'></MainBlockBox>
                    </Grid>
                    <Grid item xs={3}>
                        <MainBlockBox name='Soft chairs' subname='USD 19'></MainBlockBox>
                    </Grid>
                    <Grid item xs={3}>
                        <MainBlockBox name='Soft chairs' subname='USD 19'></MainBlockBox>
                    </Grid>

                </Grid>

            </Grid>
        </Box>
    )
}
