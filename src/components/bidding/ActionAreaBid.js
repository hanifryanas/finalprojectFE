import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import { Button, IconButton, Paper } from '@mui/material';
import axios from 'axios';



const ActionAreaBid = (product) => {


    const handleBidOrder = () => {
        axios.post(`http://localhost:3500/bid/${localStorage.getItem("userid")}/product/${localStorage.getItem("productId")}/order`, {
            bidder_ID: localStorage.getItem("userid"),
            product_ID: localStorage.getItem("productId"),
            owner_ID: localStorage.getItem("ownerId"),
            price: product.product.price + product.product.bidding_range,
        }).then(function (response) {
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        })
        axios.put(`http://localhost:3500/product/${localStorage.getItem("productId")}/bid/${localStorage.getItem("userid")}/update`, {
            bidder_ID: localStorage.getItem("userid"),
            product_ID: localStorage.getItem("productId"),
            price: product.product.price + product.product.bidding_range,
        }).then(function (response) {
            console.log(response);
            alert("Bid Successful")
            window.location.reload()
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    const [bid, setBid] = useState()

    return (
        <Paper sx={{ p: 3 }}>
            <Typography component="h2" variant="h6" >
                Bid Range: Rp {product.product.bidding_range}
            </Typography>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Typography component="p" variant="h4" sx={{ mb: 2 }}>
                    Rp {product.product.price + product.product.bidding_range}

                </Typography>
            </div>
            <Button variant="contained" size='large' fullWidth onClick={handleBidOrder}>
                Bid
            </Button>

        </Paper >
    );
}

export default ActionAreaBid