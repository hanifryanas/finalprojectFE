import * as React from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Typography,
  Chip
} from '@mui/material';
import NumberFormat from 'react-number-format';
import EllipsisText from 'react-ellipsis-text/lib/components/EllipsisText';


const CardItems = ({ product }) => {
  const handleBid = () => {
    localStorage.setItem('productId', product.id);
    window.location.href = `/roomBid`;
  }

  return (
    <Card sx={{ width: 270, height: 390, }} action="#" onClick={handleBid}>
      <CardMedia sx={{ display: "flex", justifyContent: "center", height: "200px" }}>
        <img src={product.image} alt="product-img" />
      </CardMedia>
      <CardContent>
        <Typography component="div" sx={{ color: "#1B2430", fontWeight: "600", fontSize: "1.6em", }}>
          <EllipsisText text={product.name} length={"15"} />


        </Typography>
        <Typography variant="h7" component="div" sx={{ color: "gray" }}>
          <EllipsisText text={product.category} length={"15"} />
        </Typography>

      </CardContent>


      <div style={{ padding: 10 }}>
        <Typography variant='h6' fullwidth component="div" mt>
          <NumberFormat value={product.price} displayType={'text'} thousandSeparator={true} prefix={'Rp '} />;
        </Typography>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant='subtitle1' component="div" sx={{ color: "gray", mt: 0.5 }}>
            LB:  <NumberFormat value={2000000} displayType={'text'} thousandSeparator={true} prefix={'Rp '} />
          </Typography>

          <Chip color="error" label={product.close_bid_date} />
        </div>
      </div>

    </Card >
  );
}

export default CardItems