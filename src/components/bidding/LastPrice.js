import React from 'react'
import Typography from '@mui/material/Typography';
import { Paper, Avatar } from '@mui/material';
import LooksOneSharpIcon from '@mui/icons-material/LooksOneSharp';
import NumberFormat from 'react-number-format';


const LastPrice = (product) => {
    console.log(product)
    return (
        <Paper sx={{ p: 3, mb: 2, bgcolor: "#FEF9A7" }}>
            <div style={{ display: "flex", gap: 10, marginBottom: 15, }}>
                {product.product.top_bidder === null ?
                    <Typography variant='h5' color={"gray"} align="left" sx={{ py: 1 }}>
                        Start Price:
                    </Typography>
                    :
                    <Avatar alt="1">
                        <LooksOneSharpIcon />
                    </Avatar>}
                <Typography component="h2" variant="h5" sx={{ py: 0.5 }}>
                    {product.product.top_bidder}
                </Typography>
            </div>
            <Typography component="p" variant="h4" sx={{ mb: 2 }}>
                <NumberFormat value={product.product.price} displayType={'text'} thousandSeparator={true} prefix={'Rp '} />

            </Typography>

        </Paper>
    )
}

export default LastPrice