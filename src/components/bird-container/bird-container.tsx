import { Box } from "@mui/material";
import { useState } from "react";

export default (props: any) => {
  const [enlarge, setEnlarge] = useState(1);
  // const [open, setOpen] = useState(false);
  const { id, avatarImg, y, x, clickCallback } = props;
  return (
    <Box
      sx={{
        position: "absolute",
        marginLeft: `${x}px`,
        marginTop: `${y}px`,
        // background: "transpar",
        height: "100px",
        width: "100px"
      }}
        onClick={() => clickCallback(id)}
    >
      <Box onMouseOver={() => setEnlarge(2)} onMouseOut={() => setEnlarge(1)}>
        <Box
          sx={{
            position: "absolute",
         
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            width: "100%"
          }}
        >
          <img style={{ height: enlarge * 100,    transition:"height 0.5s ease", }} src={avatarImg} />
        </Box>
      </Box>
    </Box>
  );
};