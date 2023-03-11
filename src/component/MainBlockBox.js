import styled from '@emotion/styled'
import { Box, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import img_2 from '../images/img_2.jpg'

export default function MainBlockBox({ name, subname }) {
    const CustomTypography = styled(Typography)({
        color: 'grey',
        fontSize: 11
    })
    return (
        <Box sx={{ height: '100%', width: '100%', border: '1px solid lightgrey' }}>
            <Stack sx={{
                flexDirection: 'row',
                ml: 1.5,
                alignItems: 'center',
                height: '100%',
                justifyContent: 'space-around'
            }}>
                <Stack>
                    <Typography>{name}</Typography>
                    <CustomTypography sx={{ mt: 2 }}>From</CustomTypography>
                    <CustomTypography >{subname}</CustomTypography>
                </Stack>
                <img src={img_2} alt='img' height='60'></img>
            </Stack>
        </Box>
    )
}
