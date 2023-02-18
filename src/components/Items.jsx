import { Paper, Button } from "@mui/material";

function Item({ item }) {
  return (
    <Paper sx={{
      marginLeft: 8,
      marginRight: 8,
      marginTop: 0,
    }}>
      <img
        src={item.image}
        style={{ width: "100%", height: "40vh", backgroundSize: "cover", objectFit: "cover" }}
      />
    </Paper>
  );
}

export default Item;
