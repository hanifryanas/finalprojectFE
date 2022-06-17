import React from 'react'
import TopRightNavi from './TopRightNavi';
// import SearchBarTop from './SearchBarTop';
import { Container } from '@mui/system';
import { Divider, IconButton } from '@mui/material';

const Header = () => {


  return (
    <div style={{ boxShadow: "0 2px 5px 0 rgba(0, 0, 0, 0.16)", marginBottom: "5vh", }}>
      <Container maxWidth="xl" sx={{ display: 'flex', justifyContent: "space-between", justifyItems: "center" }} >
        <div>
          <IconButton sx={{ fontFamily: 'Bebas Neue', color: "#9EDE73", fontSize: 60, padding: "0", mt: 1.5 }} onClick={() => { window.location.href = '/'; }}>Melelang</IconButton>
        </div>
        {/* <div style={{ display: "flex", justifyContent: "space-around" }}>
          <div style={{ width: "500px", marginLeft: "50px" }}><SearchBarTop /></div>
        </div> */}
        <TopRightNavi />
      </Container>
      <Divider />
    </div>
  )

}

export default Header