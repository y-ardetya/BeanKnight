import React from "react";
import Carousel from "react-material-ui-carousel";
import Item from "./Items";
import { SLIDER as slider } from "../slider";
import { Stack } from "@mui/system";

function Carousels() {
  return (
    <Carousel>
      {slider.map((item, i) => (
        <Item key={item.id} item={item} />
      ))}
    </Carousel>
  );
}

export default Carousels;
