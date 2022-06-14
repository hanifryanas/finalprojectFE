import { Grid } from '@mui/material'
import { Container, } from '@mui/system'
import React from 'react'
import InfoBidder from '../bidding/InfoBidder'
import InfoItem from '../bidding/InfoItem'
import Jumbtron from '../bidding/Jumbtron'
import Header from '../header'
import ActionAreaBid from '../bidding/ActionAreaBid'
import LastPrice from '../bidding/LastPrice'





const RoomBid = () => {
  return (
    <div>
      <Header />
      <Container maxWidth="xl" sx={{ mt: 5 }}>
        <Grid container spacing={2} sx={{ mx: "auto" }}>
          <Grid item s={12} md={9} spacing={2}>
            <div style={{ marginBottom: 15 }}>
              <Jumbtron />
            </div>
            <InfoItem />
          </Grid>
          <Grid item s={12} md={3} spacing={2}>
            <div style={{ marginBottom: 15 }}>
              <LastPrice></LastPrice>
              <InfoBidder />
            </div>

            <ActionAreaBid />
          </Grid>
          <Grid>

          </Grid>
        </Grid>
      </Container >
    </div >
  )
}

export default RoomBid