import { Box, Button, Paper, Stack, Typography, Divider } from "@mui/material";
import React from "react";
import { PRODUCT } from "../../products";
import { ShopContext } from "../../context/shopContext";
import { CartItemsList } from "./CartItemsList";
import { useContext } from "react";
import "../../App.css";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalBean = getTotalCartAmount();
  const navigate = useNavigate();
  return (
    <div>
      <Box textAlign="center" justifyContent="center" alignItems="center">
        <Typography variant="h2">Your Beans</Typography>
        <div>
          {PRODUCT.map((product) => {
            if (cartItems[product.id] !== 0) {
              return <CartItemsList data={product} />;
            }
          })}
        </div>
        {totalBean > 0 ? (
          <div>
            <Button
              variant="text"
              sx={{ color: "black", fontSize: "20px", fontWeight: "bold" }}
            >
              Subtotal: ${totalBean}
            </Button>
          </div>
        ) : (
          <h2>No Beans Detected</h2>
        )}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "10vh",
          }}
        >
          <Stack
            direction="row"
            divider={<Divider orientation="vertical" flexItem />}
            spacing={2}
          >
            <Button
              color="primary"
              variant="contained"
              onClick={() => navigate("/")}
            >
              Continue Shopping
            </Button>
            {totalBean > 0 ? (
              <Button color="primary" variant="contained">
                Checkout
              </Button>
            ) : null}
          </Stack>
        </div>
      </Box>
    </div>
  );
};
