import { Box } from "@mui/material";
import ReactPlayer from "react-player";

// import * as ftp from "basic-ftp";

function Nests({ files }: any) {
  return (
    <Box
      className="player-wrapper"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {files?.map((file: any) => (
        <Box key={file}>
          <ReactPlayer
            forceVideo
            className="react-player fixed-bottom"
            url={file}
            width="100%"
            height="100%"
            controls={true}
          />
        </Box>
      ))}
    </Box>
  );
}

export default Nests;
