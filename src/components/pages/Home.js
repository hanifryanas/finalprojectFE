import CardItems from '../card/CardItems'
import React from 'react'
import Header from '../header'
import { Container, Divider } from '@mui/material'
import ProductContainer from './ProductContainer'


function Home() {
    return (
        <div>
            <Header />
            <Container maxWidth="xl" sx={{ px: "auto", mt: 10 }}>
                <ProductContainer></ProductContainer>
            </Container >
        </div >

        /*
        Appbar
        banner
        promotions
        products
        footer*/
    )
}

export default Home