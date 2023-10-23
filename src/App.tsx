import { useEffect, useState } from "react";
// import reactLogo from './assets/react.svg'
import viteLogo from "/vite.svg";
import map from "./assets/map.png";
import "./App.css";
import { Box, Modal as MuiModal, Typography } from "@mui/material";
import { Modal } from "./components";

import config from "./config";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  boxShadow: 24,
  p: 4,
};

function App() {
  const [showDetails, setShowDetails] = useState("0");
  const [detailsData, setDetailsData] = useState<any>({});

  useEffect(() => {
    setDetailsData(config.find((itm) => showDetails === itm.key) || {});
  }, [showDetails]);

  console.log(showDetails);
  return (
    <Box>
      <Box sx={{ position: "absolute" }}>
        <img style={{ zIndex: -1 }} src={map} />
      </Box>
      {config.map((item) => (
        <Modal {...item} clickCallback={() => setShowDetails(item.key)} />
      ))}
      {/* <MuiModal
        open={showDetails !== "0"}
        sx={{
          background: "white",
          width: "500px",
          height: "500px",
        }}
      >
        <Box>asd</Box>
      </MuiModal> */}
      <MuiModal
        sx={{
          width: "80%",
        }}
        open={showDetails !== "0"}
        onClose={() => setShowDetails("0")}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            sx={{
              display: "flex",
              gap: 3,
              marginBottom: 5,
            }}
          >
            <Box>
              <img height="100px" src={detailsData.imgUrl} />
              <Typography id="modal-modal-title" variant="h6" component="h2">
                {detailsData.title}
              </Typography>
            </Box>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube-nocookie.com/embed/TIwqAYb7j5Q?si=cOEkoqtMtngsY_Tm"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </Box>
      </MuiModal>
    </Box>
  );
}

export default App;
