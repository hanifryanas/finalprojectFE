import { Card, CardContent, CardMedia } from '@mui/material'
import { Test } from '../../assets/img/index'

import React from 'react'

const Jumbtron = () => {
    return (
        <Card sx={{ height: "400px", width: "100%", bgcolor: "black" }} elevation={2}>
            < CardContent >
                <CardMedia sx={{
                    display: "flex", justifyContent: "center", height: "350px"
                }}>
                    <img alt="s" src={Test} />
                </CardMedia >
            </CardContent >
        </Card >
    )
}

export default Jumbtron