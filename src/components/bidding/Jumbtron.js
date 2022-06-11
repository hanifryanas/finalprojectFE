import { Card, CardContent, CardMedia } from '@mui/material'
import { Test } from '../../assets/img/index'

import React from 'react'

const Jumbtron = () => {
    return (
        <Card sx={{ width: "70%", height: "400px" }} elevation={3}>
            < CardContent >
                <CardMedia sx={{
                    display: "flex", justifyContent: "center", height: "350px"
                }}>
                    <img src={Test} />
                </CardMedia >
            </CardContent >
        </Card >
    )
}

export default Jumbtron