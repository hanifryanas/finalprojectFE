import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import { Button, IconButton, Paper } from '@mui/material';


const ActionAreaBid = () => {
    const [lastPrice, setLatsPrice] = useState(100000)


    return (

        <Paper sx={{ p: 3 }}>
            <Typography component="h2" variant="h6" >
                Bid Range:
            </Typography>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Typography component="p" variant="h4" sx={{ mb: 2 }}>
                    Rp {lastPrice}

                </Typography>
                <div>
                    <IconButton>-</IconButton>
                    <IconButton>+</IconButton>

                </div>
            </div>
            <Button variant="contained" size='large' fullWidth>
                Bid
            </Button>

        </Paper>
    );
}

export default ActionAreaBid