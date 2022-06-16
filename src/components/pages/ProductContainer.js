import React, { useState, useEffect } from 'react'
import CardItems from '../card/CardItems'
import axios from 'axios'


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
    <section>
      {
        productList.map(product => {
          return <CardItems key={product.id} product={product} />
        })
      }
    </section>

  )
}

export default ProductContainer