import React from 'react'
import Typography from '@mui/material/Typography';
import { Paper, Avatar } from '@mui/material';
import LooksOneSharpIcon from '@mui/icons-material/LooksOneSharp';

const LastPrice = () => {
    return (
        <Paper sx={{ p: 3, mb: 2, bgcolor: "#FEF9A7" }}>
            <div style={{ display: "flex", gap: 10, marginBottom: 15, }}>
                <Avatar alt="1">
                    <LooksOneSharpIcon />
                </Avatar>

                <Typography component="h2" variant="h5" sx={{ py: 0.5 }}>
                    Bambang
                </Typography>
            </div>
            <Typography component="p" variant="h4" sx={{ mb: 2 }}>
                Rp 15.000.000
            </Typography>

        </Paper>
    )
}

export default LastPrice