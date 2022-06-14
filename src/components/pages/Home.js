import CardItems from '../card/CardItems'
import React from 'react'
import Header from '../header'
import { Container, Divider } from '@mui/material'


function Home() {
    return (
        <div>
            <Header />
            <Container maxWidth="xl" sx={{ px: "auto" }}>
                <div style={{ margin: "30px" }}>
                    <h3>Upcoming...                    </h3>
                    <CardItems />
                </div>
                <Divider sx={{ mb: "40px" }} />
                <div style={{ margin: "30px" }}>
                    <h3>Lelang ...                    </h3>
                    <CardItems />
                </div>
                <Divider sx={{ mb: "40px" }} />
                <div style={{ margin: "30px" }}>
                    <h3>Finished...                    </h3>
                    <CardItems />
                </div>
            </Container>
        </div>

        /*
        Appbar
        banner
        promotions
        products
        footer*/
    )
}

export default Home