import React from 'react'
import TopRightNavi from './TopRightNavi';
// import SearchBarTop from './SearchBarTop';
import { Container } from '@mui/system';

const Header = () => {


  return (
    <div style={{ borderBottom: "solid" }}>
      <Container maxWidth="xl" sx={{ display: 'flex', justifyContent: "space-between", justifyItems: "center" }} >
        <div>
          <h1>Melelang</h1>
        </div>
        {/* <div style={{ display: "flex", justifyContent: "space-around" }}>
          <div style={{ width: "500px", marginLeft: "50px" }}><SearchBarTop /></div>
        </div> */}
        <TopRightNavi />

      </Container>
    </div>
  )

}

export default Header