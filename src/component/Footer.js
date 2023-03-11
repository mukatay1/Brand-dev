import styled from '@emotion/styled'
import { Button, ButtonGroup, OutlinedInput, Typography } from '@mui/material'
import { Box, Container, Stack } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'
import my_logo from '../images/my_logo.png'
import google_pay from '../images/google_pay.jpg'
import app_store from '../images/app_store.jpg'
import FacebookIcon from '@mui/icons-material/Facebook';


export default function Footer() {
    const GreyStyle = styled(Typography)({
        color: 'grey'
    })
    return (
        <Box >
            <Box sx={{
                height: 220,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <Typography>Subscribe on our newsletter</Typography>
                <GreyStyle>Get daily news on upcoming offers from many suppliers all over the world</GreyStyle>
                <ButtonGroup sx={{ mt: 2, height: 40 }}>
                    <OutlinedInput placeholder='Email'></OutlinedInput>
                    <Button variant='contained' sx={{ ml: 1 }}>Subscribe</Button>
                </ButtonGroup>

            </Box>
            <Container >
                <Stack sx={{
                    display: { xs: 'none', sm: 'none', md: 'flex' },
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    my: 7
                }}>
                    <Stack justifyContent={'space-between'}>
                        <Link to='/'><img src={my_logo} alt='Brand' /></Link>
                        <GreyStyle>Best information about the companyies </GreyStyle>
                        <GreyStyle>here but now lorem ipsum is</GreyStyle>
                        <Stack flexDirection={'row'}>
                            <FacebookIcon />
                            <FacebookIcon />
                            <FacebookIcon />
                            <FacebookIcon />
                            <FacebookIcon />
                        </Stack>
                    </Stack>

                    <Stack>
                        <Typography variant="h6" sx={{ mb: 1 }}>About</Typography>
                        <GreyStyle >About us</GreyStyle>
                        <GreyStyle>Find store</GreyStyle>
                        <GreyStyle>Categories</GreyStyle>
                        <GreyStyle>Blogs</GreyStyle>
                    </Stack>
                    <Stack>
                        <Typography variant="h6" sx={{ mb: 1 }}>Partnership</Typography>
                        <GreyStyle>About us</GreyStyle>
                        <GreyStyle>Find store</GreyStyle>
                        <GreyStyle>Categories</GreyStyle>
                        <GreyStyle>Blogs</GreyStyle>
                    </Stack>
                    <Stack>
                        <Typography variant="h6" sx={{ mb: 1 }}>Information</Typography>
                        <GreyStyle>About us</GreyStyle>
                        <GreyStyle>Find store</GreyStyle>
                        <GreyStyle>Categories</GreyStyle>
                        <GreyStyle>Blogs</GreyStyle>
                    </Stack>
                    <Stack>
                        <Typography variant="h6" sx={{ mb: 1 }}>For users </Typography>
                        <GreyStyle>About us</GreyStyle>
                        <GreyStyle>Find store</GreyStyle>
                        <GreyStyle>Categories</GreyStyle>
                        <GreyStyle>Blogs</GreyStyle>
                    </Stack>
                    <Stack>
                        <Typography variant="h6" sx={{ mb: 1 }}>Get app</Typography>
                        <Link to='/'><img src={google_pay} style={{ height: 50 }} alt='google' /></Link>
                        <Link to='/'><img src={app_store} style={{ height: 50 }} alt='app' /></Link>
                    </Stack>

                </Stack>
            </Container>
            <Box sx={{
                bgcolor: '#DEE2E7',
                height: 90,
                display: 'flex',
                alignItems: 'center',

            }}>
                <Container maxWidth='lg'>
                    <Stack sx={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        p: 4
                    }}>
                        <Typography>@ 2023 Ecommerce.</Typography>
                        <Typography>English</Typography>
                    </Stack>
                </Container>
            </Box>
        </Box>
    )
}
