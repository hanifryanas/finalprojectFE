import { Card, CardContent, CardMedia } from '@mui/material'

import React from 'react'

const Jumbtron = (product) => {
    return (
        <Card sx={{ height: "400px", width: "100%", bgcolor: "black" }} elevation={2}>
            < CardContent >
                <CardMedia sx={{
                    display: "flex", justifyContent: "center", height: "350px"
                }}>
                    <img alt="img" src={product.product.image} />
                </CardMedia >
            </CardContent >
        </Card >
    )
}

export default Jumbtron