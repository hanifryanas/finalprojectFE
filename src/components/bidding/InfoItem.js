import { Card, Avatar, Stack, Typography, Grid, Paper } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'

const InfoItem = (product) => {
  console.log(product.product)
  console.log(product.owner)
  return (
    <Stack spacing={2}>
      <Card sx={{ px: 5, py: 2, }}>
        <Typography variant='h3' sx={{ mb: 2 }}>
          {product.product.name}
        </Typography>
        <div style={{ display: "flex", gap: 50, }}>
          <div style={{ display: "flex", gap: 20, p: 1 }}>
            <Typography variant='h5' color={"gray"} align="left" sx={{ py: 1 }}>
              Kategori:
            </Typography>

            <Typography variant='h5' sx={{ py: 1, mr: 1.5 }}>
              {product.product.category}
            </Typography>

          </div>

        </div>

      </Card>
      <Card elevation={2} sx={{ display: "flex", mt: "50px", gap: 25, px: 5, py: 3 }}>
        <div style={{ display: "flex" }}>
          <Typography variant='h5' color={"gray"} align="left" sx={{ py: 1, mr: 1.5 }}>
            Pelelang:
          </Typography>
          <div style={{ display: "flex", gap: "10px", p: 1 }}>
            <Typography variant='h4' align='center' sx={{ pt: 0.5, }}>
            {product.owner.owner}
            </Typography>
          </div>
        </div>
        <div style={{ display: "flex", gap: 20 }}>
          <Typography variant='h5' color={"gray"} align="left" sx={{ py: 1, }}>
            Lokasi:
          </Typography>

          <Typography variant='h5' sx={{ py: 1 }}>
            {product.owner.address}
          </Typography>

        </div>

      </Card>

      <Card sx={{ mb: 30, px: 5, py: 3 }}>
        <Typography variant='h5' color={"gray"} align="left" sx={{ py: 1, }}>
          Deskripsi Barang:
        </Typography>
        <Typography variant='subtitle1' component="div" sx={{ py: 1 }}>
          {product.product.description}
        </Typography>
      </Card>


    </Stack >

  )
}

export default InfoItem