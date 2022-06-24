import React, { useState, useEffect } from 'react'
import CardItems from '../components/card/CardItems'
import axios from 'axios'
import { Container } from '@mui/material'


const ProductContainer = () => {
  const [productList, setProductList] = useState([])

  useEffect(() => {
    updateProduct()
  }, [])

  const updateProduct = () => {
    axios.get(`http://localhost:3500/product`).then(function (response) {
      setProductList(response.data)
    }).catch(function (error) {
      console.log(error);
    })
  }

  return (
    <Container maxWidth="xl" sx={{ display: "flex", gap: 2, px: "auto" }}>
      {
        productList.map(product => {
          return <CardItems key={product.id} product={product} />
        })
      }
    </Container>

  )
}

export default ProductContainer