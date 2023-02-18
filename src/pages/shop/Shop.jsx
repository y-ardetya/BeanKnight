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
          spacing={12}
          justifyContent="center"
        >
          {PRODUCT.map((item) => {
            return <Product item={item} />;
          })}
        </Stack>
      </div>
    </>
  );
};
