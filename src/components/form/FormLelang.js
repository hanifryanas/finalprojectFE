import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Box, Button, } from '@mui/material';

const FormLelang = () => {
  return (
    <Box sx={{
      boxShadow: 2,
      padding: 10,
    }}>
      <Typography variant="h6" gutterBottom>
        Form Lelang
      </Typography>
      <Grid container spacing={3}>
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