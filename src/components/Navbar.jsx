import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Stack } from "@mui/system";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { ShopContext } from "../context/shopContext";
import { useContext } from "react";

export const Navbar = () => {
  const { addToCart, cartItems } = useContext(ShopContext);
  return (
    <>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "black",
          height: "80px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <img src="https://static.wikia.nocookie.net/mrfz/images/3/30/Arknights_logo.png" />
          </Typography>

          <Stack direction="row" spacing={2}>
            <Button>
              <Link
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontSize: "22px",
                }}
                variant="text"
                to="/"
              >
                Shop
              </Link>
            </Button>
            <Button>
              <Link to="/cart">
                <ShoppingCartIcon fontSize="large" sx={{ color: "white" }} />
              </Link>
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
      <AppBar
        position="static"
        sx={{ backgroundColor: "#4FB2D7", height: "20px" }}
      ></AppBar>
    </>
  );
};
