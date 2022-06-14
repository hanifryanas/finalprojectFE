import { Card, Avatar, Stack, Typography, Grid, Paper } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'

const InfoItem = () => {
  return (
    <Stack spacing={2}>
      <Card sx={{ px: 5, py: 2, }}>
        <Typography variant='h3' sx={{ mb: 2 }}>
          Ikan Koi Hokaido Red White
        </Typography>
        <div style={{ display: "flex", gap: 50, }}>
          <div style={{ display: "flex", gap: 20, p: 1 }}>
            <Typography variant='h5' color={"gray"} align="left" sx={{ py: 1 }}>
              Category:
            </Typography>

            <Typography variant='h5' sx={{ py: 1, mr: 1.5 }}>
              Peliaharaan
            </Typography>

          </div>

          <div style={{ display: "flex", gap: 20 }}>
            <Typography variant='h5' color={"gray"} align="left" sx={{ py: 1, }}>
              Jenis:
            </Typography>

            <Typography variant='h5' sx={{ py: 1 }}>
              Ikan
            </Typography>

          </div>
        </div>

      </Card>
      <Card elevation={2} sx={{ display: "flex", mt: "50px", gap: 25, px: 3, py: 3 }}>
        <div style={{ display: "flex" }}>
          <Typography variant='h5' color={"gray"} align="left" sx={{ py: 1, mr: 1.5 }}>
            Pelelang:
          </Typography>
          <div style={{ display: "flex", gap: "10px", p: 1 }}>
            <Avatar sx={{ bgcolor: "red", width: 50, height: 50 }} aria-label="recipe">
              R
            </Avatar>

            <Typography variant='h4' align='center' sx={{ pt: 0.5, }}>
              Rafatar babis
            </Typography>
          </div>
        </div>
        <div style={{ display: "flex", gap: 20 }}>
          <Typography variant='h5' color={"gray"} align="left" sx={{ py: 1, }}>
            Location:
          </Typography>

          <Typography variant='h5' sx={{ py: 1 }}>
            Jakarta
          </Typography>

        </div>

      </Card>

      <Card sx={{ height: 500, mb: 30 }}>Deskripsi Barang</Card>

    </Stack >

  )
}

export default InfoItem