import React,{useState} from 'react'
import Typography from '@mui/material/Typography';
import { Paper, Avatar } from '@mui/material';
import LooksOneSharpIcon from '@mui/icons-material/LooksOneSharp';


const LastPrice = (product) => {
    const [isNull, setIsNull] = useState(false);

    if(product.product.top_bidder === null){
        setIsNull(true)
    }

    return (
        isNull ?
        <Paper sx={{ p: 3, mb: 2, bgcolor: "#FEF9A7" }}>
            <div style={{ display: "flex", gap: 10, marginBottom: 15, }}>
                <Avatar alt="1">
                    <LooksOneSharpIcon />
                </Avatar>
            </div>
        </Paper>    
        :
        <Paper sx={{ p: 3, mb: 2, bgcolor: "#FEF9A7" }}>
            <div style={{ display: "flex", gap: 10, marginBottom: 15, }}>
                <Avatar alt="1">
                    <LooksOneSharpIcon />
                </Avatar>
                <Typography component="h2" variant="h5" sx={{ py: 0.5 }}>
                    {product.product.top_bidder}
                </Typography>
            </div>
            <Typography component="p" variant="h4" sx={{ mb: 2 }}>
                {product.product.price}
            </Typography>
        </Paper>
    )
}

export default LastPrice