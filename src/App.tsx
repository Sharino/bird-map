import { useEffect, useState } from "react";
// import reactLogo from './assets/react.svg'
import map from "../public/map.png";
import "./App.css";
import {
  Backdrop,
  Box,
  Fade,
  IconButton,
  Modal as MuiModal,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { BirdContainer } from "./components";
// import * as ftp from "basic-ftp";
import config from "./config";
import Apie from "./pages/apie";
import Nests from "./pages/nests";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      style={{ width: "100%" }}
      {...other}
    >
      {value === index && (
        <Box sx={{ py: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function App() {
  const [showProjectInfo, setShowProjectInfo] = useState(true);
  const [showDetails, setShowDetails] = useState("0");
  const [detailsData, setDetailsData] = useState<any>({});
  const delay = 300;

  const [value, setValue] = useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  useEffect(() => {
    let timer = setTimeout(() => setShowProjectInfo(true), delay * 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [showProjectInfo, showDetails]);
  // ESM: import * as ftp from "basic-ftp"
  // const example = async () => {
  //   console.log(ftp);
  //   const client = new ftp.Client();
  //   client.ftp.verbose = true;
  //   try {
  //     await client.access({
  //       host: "stebiu.onlne",
  //       user: "user",
  //       password: "123",
  //       secure: false,
  //     });
  //     console.log(await client.list());
  //   } catch (err) {
  //     console.log(err);
  //   }
  //   client.close();
  // };

  // useEffect(() => {
  //   console.log(ftp);
  // }, []);

  useEffect(() => {
    setDetailsData(config.find((itm) => showDetails === itm.key) || {});
  }, [showDetails]);

  console.log(detailsData);
  return (
    <Box
      sx={{
        backgroundImage: `url(${map})`,
        height: "100%",
        minHeight: "100%",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {config.map((item) => (
        <BirdContainer
          {...item}
          clickCallback={() => setShowDetails(item.key)}
        />
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
        sx={
          {
            // width: "80%",
          }
        }
        open={showDetails !== "0"}
        onClose={() => setShowDetails("0")}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 1000,
          },
        }}
      >
        <Fade in={showDetails !== "0"} timeout={1000}>
          <Box
            sx={{
              "&:focus": {
                outline: "none",
              },
              position: "absolute" as "absolute",
              borderRadius: 3,
              width: "90%",
              height: "90%",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              bgcolor: "background.paper",
              border: "2px solid #000",
              display: "flex",
              flexDirection: "column",
              justifyContent: "start",
              alignItems: "start",
              boxShadow: 24,
              p: 4,
              overflowY: "scroll",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                right: 10,
                top: 10,
              }}
            >
              <IconButton
                aria-label="delete"
                size="large"
                onClick={() => setShowDetails("0")}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            </Box>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs value={value} onChange={handleChange}>
                <Tab label="Apie" />
                {detailsData.files && <Tab label="Inkilas" />}
              </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
              <Apie detailsData={detailsData} />
            </CustomTabPanel>
            {detailsData.files && (
              <CustomTabPanel value={value} index={1}>
                <Nests files={detailsData.files} />
              </CustomTabPanel>
            )}
          </Box>
        </Fade>
      </MuiModal>
      <MuiModal
        sx={
          {
            // width: "80%",
          }
        }
        open={showProjectInfo}
        onClose={() => setShowDetails("0")}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            "&:focus": {
              outline: "none",
            },
            position: "absolute" as "absolute",
            borderRadius: 3,
            width: "90%",
            height: "90%",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            border: "2px solid #000",
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
            alignItems: "start",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: 3,
              marginBottom: 5,
            }}
          >
            <Box
              sx={{
                position: "absolute",
                right: 10,
                top: 10,
              }}
            >
              <IconButton
                aria-label="delete"
                size="large"
                onClick={() => setShowProjectInfo(false)}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </MuiModal>
    </Box>
  );
}

export default App;
