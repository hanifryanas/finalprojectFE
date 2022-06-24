import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import { Button, Paper } from '@mui/material';
import axios from 'axios';
import NumberFormat from 'react-number-format';



const ActionAreaBid = (product) => {

    //unLogin
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        updateUserStatus();
    })
    const updateUserStatus = () => {
        const accessToken = localStorage.getItem('accessToken');
        if (accessToken) {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
    }


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


    return (
        <Paper sx={{ p: 3 }}>
            <Typography component="h2" variant="h6" >
                Bid Range: <NumberFormat value={product.product.bidding_range} displayType={'text'} thousandSeparator={true} prefix={'Rp '} />

            </Typography>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Typography component="p" variant="h4" sx={{ mb: 2 }}>
                    <NumberFormat value={product.product.price + product.product.bidding_range} displayType={'text'} thousandSeparator={true} prefix={'Rp '} />

                </Typography>
            </div>{isLoggedIn ?
                <Button variant="contained" size='large' fullWidth onClick={handleBidOrder}>
                    Bid
                </Button>
                :
                <Button variant="contained" size='large' fullWidth onClick={() => { window.location.href = '/signIn' }}>
                    Bid
                </Button>
            }

        </Paper >
    );
}

export default ActionAreaBid