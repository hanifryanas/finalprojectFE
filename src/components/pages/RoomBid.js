import { Container, display } from '@mui/system'
import React from 'react'
import InfoBidder from '../bidding/InfoBidder'
import InfoItem from '../bidding/InfoItem'
import Jumbtron from '../bidding/Jumbtron'
import Header from '../header'

const RoomBid = () => {
  return (
    <div>
      <Header />
      <Container maxWidth="xl">
        <div style={{ margin: "30px", display: "flex" }}>
          <div style={{ width: "1500px" }}>
            <Jumbtron />
          </div>
          <div>
            <InfoBidder />
          </div>
          <div>
            
          </div>
        </div>
      </Container >
    </div >
  )
}

export default RoomBid