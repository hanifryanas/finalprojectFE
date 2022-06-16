import * as React from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Typography
} from '@mui/material';

const CardItems = ({product}) => {

  return (
    <Card sx={{ width: 270, height: 390, paddingTop: "10px", padding: "10px" }} action="#">
      <CardMedia sx={{ display: "flex", justifyContent: "center", height: "200px" }}>
        <img src={product.image} alt="product-img"/>
      </CardMedia>
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {product.name}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <Typography variant='h7' component="div" sx={{ color: "red" }}>
            {product.price}
          </Typography>
          <Typography variant='h7' component="div">
            {product.topBidder}
          </Typography>
        </div>
        <Typography variant='h7' component="div">
          {product.close_bid_date}
        </Typography>

      </CardActions>

    </Card >
  );
}

export default CardItems