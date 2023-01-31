import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const HomePage = () => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 40} }>
            <Typography gutterBottom variant="h4" component="div">
              Welcome at NewsApi
            </Typography>
        </Box>
    );
};

export default HomePage;
