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
      <Card elevation={2} sx={{ display: "flex", mt: "50px", gap: 25, px: 5, py: 3 }}>
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

      <Card sx={{ mb: 30, px: 5, py: 3 }}>
        <Typography variant='h5' color={"gray"} align="left" sx={{ py: 1, }}>
          Deskripsi Barang:
        </Typography>
        <Typography variant='subtitle1' component="div" sx={{ py: 1 }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.


          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </Typography>
      </Card>


    </Stack >

  )
}

export default InfoItem