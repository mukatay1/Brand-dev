import React from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';
import { Stack } from '@mui/system';

export default function Item() {
  const location = useLocation();
  const item = location.state;
  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      width: '80%',
      margin: '0 auto',
      mt: 10,
      borderRadius: 10
    }}>
      <Stack flex={1} sx={{ border: '1px solid lightgrey', justifyContent: 'center', alignItems: 'center' }}>
        <img src={`https://res.cloudinary.com/renfoodapi/${item.image}`} height="250" alt={item.name} />
      </Stack>
      <Box flex={2} sx={{ border: '1px solid lightgrey' }}>
        <Typography variant="h4" gutterBottom>
          {item.name}
        </Typography>
        <Typography variant="h5" gutterBottom>
          ${item.price}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {item.description}
        </Typography>
        <Box my={2}>
          <Typography variant="h6" gutterBottom>
            Details:
          </Typography>
          <Typography variant="body1" gutterBottom>
            Material: material
          </Typography>
          <Typography variant="body1" gutterBottom>
            Color: blue
          </Typography>
          <Typography variant="body1" gutterBottom>
            Size: M
          </Typography>
        </Box>
        <Button variant="contained" color="primary">
          Add to Cart
        </Button>
      </Box>
    </Box>
  );
}
