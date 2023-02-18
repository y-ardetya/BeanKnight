import { Stack } from "@mui/system";
import { PRODUCT } from "../../products";
import { Product } from "./Product";
import Carousels from "../../components/Carousel";

export const Shop = () => {
  return (
    <>
      <div className="background">
        <Carousels />
        <Stack
          direction="row"
          spacing={2}
          xs={1}
          justifyContent="center"
          sx={{
            pl: '64px',
            pr: '64px'
          }}
        >
          {PRODUCT.map((item) => {
            return <Product item={item} />;
          })}
        </Stack>
      </div>
    </>
  );
};
