import React, { useState, useEffect } from 'react'
import CardItems from '../card/CardItems'


const ProductContainer = () => {
  const [productList, setProductList] = useState([])

  // useEffect(() => {
  //   updateProduct()
  // }, [])


  return (
    <section>
      <CardItems></CardItems>

      {/* {
        productList.map(product => {
          return <CardItems key={product.id} product={product} />
        })
      } */}
    </section>

  )
}

export default ProductContainer