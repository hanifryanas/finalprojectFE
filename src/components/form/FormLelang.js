import * as React from 'react';
import axios from 'axios';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Box, Button, } from '@mui/material';

const FormLelang = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const id = 1;//user bisa dikrim dari session
    axios.post(`http://localhost:3500/id/${id}/product/`, {
      owner_ID: id,
      name: event.target.Tittle.value,
      price: event.target.startPrice.value,
      description: event.target.description.value,
      image: event.target.image.value,
      category: event.target.jenisBarang.value,
      bidding_range: event.target.bidding_range.value,
      start_bid_date : event.target.dateStarted.value,
      end_bid_date : event.target.dateEnd.value,
      image : event.target.Picture.value,
  })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};
  return (
    <Box sx={{
      boxShadow: 2,
      padding: 10,
    }}>
      <Typography variant="h6" gutterBottom>
        Form Lelang
      </Typography>
      <Grid container spacing={3} onSubmit={handleSubmit}>
        <Grid item xs={12} sm={8}>
          <TextField
            required
            id="jenisBarang"
            name="jenisBarang"
            label="Jenis Barang"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={8}>
          <TextField
            required
            id="Tittle"
            name="Tittle"
            label="Tittle"
            fullWidth
            autoComplete="family-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="startPrice"
            name="startPrice"
            label="Start Price"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="dateStarted"
            name="dateStarted"
            label="Date Started"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="dateEnd"
            name="dateEnd"
            label="Date End "
            fullWidth
            variant="standard"
          />
        </Grid>

        <Grid item xs={12}>

        </Grid>
        <Grid item xs={12}>
          <TextField
            id="Picture"
            name="Picture"
            label="Picture"
            fullWidth
            variant="standard"
          />
        </Grid>
      </Grid>

      <Grid container justifyContent="flex-end">
        <Grid item>
          <Button >Lelang</Button>
        </Grid>
      </Grid>

    </Box>
  );
}

export default FormLelang