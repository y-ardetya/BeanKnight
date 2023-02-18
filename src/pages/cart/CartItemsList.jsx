import {
  Card,
  CardMedia,
  Grid,
  Typography,
  CardContent,
  Box,
  Button,
  backdropClasses,
} from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { ShopContext } from "../../context/shopContext";
import { useContext } from "react";

export const CartItemsList = (props) => {
  const { id, productName, productImage, price } = props.data;
  const { addToCart, cartItems, removeFromCart } = useContext(ShopContext);
  return (
    <>
      <Card
        sx={{
          display: "flex",
          textAlign: "start",
          width: "30vw",
          alignItems: "center",
          margin: "auto",
          flexGrow: "1",
          height: "150px",
          mt: "20px",
          borderRadius: "10px",
          background: "#fafafa",
          boxShadow: "20px 20px 60px #d5d5d5,-20px -20px 60px #ffffff",
        }}
      >
        <CardMedia component="img" sx={{ width: 150 }} image={productImage} />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto", marginTop: "14px" }}>
            <Typography gutterBottom component="div" variant="h5">
              {productName}
            </Typography>
            <Typography
              gutterBottom
              variant="h6"
              color="text.secondary"
              component="div"
            >
              $ {price}
            </Typography>
            <Button
              variant="contained"
              sx={{
                paddingX: "90px",
              }}
            >
              {cartItems[id]}
            </Button>
            <Button variant="elevated" onClick={() => removeFromCart(id)}>
              <DeleteIcon fontSize="large" sx={{ color: "red" }}></DeleteIcon>
            </Button>
          </CardContent>
        </Box>
      </Card>
    </>
  );
};
