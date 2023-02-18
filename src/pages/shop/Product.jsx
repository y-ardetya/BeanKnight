import {
  Button,
  Card,
  CardContent,
  Typography,
  CardActions,
  CardMedia,
  Grid,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { ShopContext } from "../../context/shopContext";
import { useContext } from "react";

export const Product = (props) => {
  const { id, productName, price, productImage } = props.item;
  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemsAmount = cartItems[id];

  return (
    <>
      <Grid
        container
        justifyItems="center"
        sx={{
          width: "400px",
          height: "500px",
          paddingTop: "30px",
        }}
      >
        <Grid item lg={20}>
          <Card
            sx={{
              transition: "all 0.2s ease-in-out",
              cursor: "pointer",
              boxShadow: "6px 10px 17px 5px rgba(0,0,0,0.8)",
              "&:hover": {
                transform: "scale(1.1)",
              },
            }}
          >
            <CardMedia component="img" image={productImage} />
            <CardContent>
              <Typography variant="h6" component="div">
                {productName}
              </Typography>
              <Typography variant="h5" component="div">
                {"$ " + price}
              </Typography>
            </CardContent>
            <CardActions>
              <Button variant="outlined" onClick={() => addToCart(id)}>
                Add to cart {cartItemsAmount > 0 && <>({cartItemsAmount}) </>}
              </Button>
              <Button variant="elevated">
                <DeleteIcon fontSize="large" sx={{ color: "red" }}></DeleteIcon>
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};
