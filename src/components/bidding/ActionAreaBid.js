import React from 'react';
import Typography from '@mui/material/Typography';
import { Button, Paper } from '@mui/material';

function preventDefault(event) {
    event.preventDefault();
}

const ActionAreaBid = () => {
    return (

        <Paper sx={{ p: 3 }}>
            <Typography component="h2" variant="h5" >
                Bid Price:
            </Typography>
            <Typography component="p" variant="h4" sx={{ mb: 2 }}>
                Rp 1.000.000
            </Typography>
            <Button variant="contained" size='large' fullWidth>
                Bid
            </Button>

        </Paper>
    );
}

export default ActionAreaBid