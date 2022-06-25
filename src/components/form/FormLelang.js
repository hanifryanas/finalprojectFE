import React, { useState } from 'react';
import axios from 'axios';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Box, Button, } from '@mui/material';

const FormLelang = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [bidding_range, setBiddingRange] = useState("");
  // const [start_bid_date, setStartBidDate] = useState("");
  const [end_bid_date, setEndBidDate] = useState("");
  const [image_url, setImageUrl] = useState("");

//


  const handleSubmit = (event) => {
    event.preventDefault();
    const userid = localStorage.getItem('userid');
    const start_bid_date = new Date().toLocaleDateString('id', {
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
      hour12: false,
      timeZone: 'Asia/Jakarta'
    });
    console.log(start_bid_date);
    const data = {
      name: name,
      price: price,
      description: description,
      image: image_url,
      category: category,
      bidding_range: bidding_range,
      start_bid_date: start_bid_date,
      close_bid_date: end_bid_date,
    }
    axios.post(`https://ancient-tundra-53041.herokuapp.com/product/user/${userid}/`, data)
      .then(function (response) {
        console.log(response);
        alert("Product has been added");

      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <Box component="form" noValidate onSubmit={handleSubmit} sx={{
      boxShadow: 2,
      padding: 5,
    }} >
      <Typography variant="h5" gutterBottom sx={{ mb: 4 }}>
        Lelang Form
      </Typography>
      <Grid container spacing={3} >
        <Grid item xs={12} sm={8}>
          <TextField
            required
            id="Title"
            name="Title"
            label="Object Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
            autoComplete="family-name"
            variant="standard"
          />
        </Grid>

        <Grid item xs={12} sm={8}>
          <TextField
            required
            id="Category"
            name="Category"
            label="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            fullWidth
            autoComplete="family-name"
            variant="standard"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="startPrice"
            name="startPrice"
            label="Start Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            fullWidth
            variant="standard"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="BidRange"
            name="BidRange"
            label="Bidding Range"
            value={bidding_range}
            onChange={(e) => setBiddingRange(e.target.value)}
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="dateEnd"
            name="dateEnd"
            label="Date End (DD/MM/YYYY)"
            value={end_bid_date}
            onChange={(e) => setEndBidDate(e.target.value)}
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
            label="Picture URL"
            value={image_url}
            onChange={(e) => setImageUrl(e.target.value)}
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="Deskripsi"
            name="Deskripsi"
            label="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            fullWidth
            multiline
            rows={3}
            variant="standard"
          />
        </Grid>
        <Grid container justifyContent="flex-end" sx={{ mt: 10 }}>
          <Grid item>
            <Button type="submit" variant="contained" >Lelang</Button>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default FormLelang