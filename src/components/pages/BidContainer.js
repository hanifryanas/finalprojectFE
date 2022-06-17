import { Grid } from '@mui/material'
import { Container, } from '@mui/system'
import React, { useState, useEffect } from 'react'
import InfoBidder from '../bidding/InfoBidder'
import InfoItem from '../bidding/InfoItem'
import Jumbtron from '../bidding/Jumbtron'
import ActionAreaBid from '../bidding/ActionAreaBid'
import LastPrice from '../bidding/LastPrice'
import axios from 'axios'


const BidContainer = () => {
    let ownerInfo = {};
    const [product, setProduct] = useState({})
    const [ownerUserInfo, setOwnerUserInfo] = useState({})
    const [bidderUserInfo, setBidderUserInfo] = useState([])
    useEffect(() => {
        updateProductById()
        ownerUser()
        updateBidder()
    }, [])
    
    const updateProductById = () => {
        axios.get(`http://localhost:3500/product/${localStorage.getItem(`productId`)}`)
        .then(function (response) {
            setProduct(response.data)
            const ownerId = response.data.owner_ID
            localStorage.setItem(`ownerId`, ownerId)
        }).catch(function (error) {
            console.log(error);
        })
    }
    
    const ownerUser = () => {
        console.log(localStorage.getItem(`ownerId`))
        axios.get(`http://localhost:3500/user/${localStorage.getItem(`ownerId`)}`)
        .then(function (response) {
            ownerInfo.owner = response.data.username
            ownerInfo.address = response.data.address
            setOwnerUserInfo(ownerInfo)
        }).catch(function (error) {
            console.log(error);
        })
    }

    const updateBidder = () => {
        axios.get(`http://localhost:3500/bid/product/${localStorage.getItem(`productId`)}`)
        .then(function (response) {
            setBidderUserInfo(response.data)
        }).catch(function (error) {
            console.log(error);
        })
    }
    return (
        <div>
            <Container maxWidth="xl" sx={{ mt: 5 }}>
                <Grid container spacing={2} sx={{ mx: "auto" }}>
                    <Grid item s={12} md={9} spacing={2}>
                        <div style={{ marginBottom: 15 }}>
                            <Jumbtron product={product} />
                        </div>
                        <InfoItem product={product} owner={ownerUserInfo}/>
                    </Grid>
                    <Grid item s={12} md={3} spacing={2}>
                        <div style={{ marginBottom: 15 }}>
                            <LastPrice product={product}></LastPrice>
                            <InfoBidder bidder={bidderUserInfo} />
                        </div>

                        <ActionAreaBid product={product} />
                    </Grid>
                    <Grid>
                    </Grid>
                </Grid>
            </Container >
        </div >
    )
}

export default BidContainer