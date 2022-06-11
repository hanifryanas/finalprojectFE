import * as React from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Typography
} from '@mui/material';

import { Test } from '../../assets/img/index'

function CardItems() {


  return (
    <Card sx={{ width: 270, height: 390, paddingTop: "10px", padding: "10px" }} action="#">
      <CardMedia sx={{ display: "flex", justifyContent: "center", height: "200px" }}>
        <img src={Test} />
      </CardMedia>
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          Ikan Koi Arapaima as dasdasdasd
        </Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <Typography variant='h7' component="div" sx={{ color: "red" }}>
            Start: 15000
          </Typography>
          <Typography variant='h7' component="div">
            Bandung, kopo...
          </Typography>
        </div>
        <Typography variant='h7' component="div">
          10:20
        </Typography>

      </CardActions>

    </Card >
  );
}

export default CardItems