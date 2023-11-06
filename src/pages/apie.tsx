import { Box, Typography } from "@mui/material";

function Apie({ detailsData }: any) {
  return (
    <Box sx={{}}>
      <Box
        sx={{
          display: "flex",
          gap: 3,
          marginBottom: 5,
        }}
      >
        <Box
          sx={{
            display: "flex",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "start",
              flexDirection: "column",
            }}
          >
            <Typography id="modal-modal-title" variant="h3">
              {detailsData.title}
            </Typography>
            <Typography id="modal-modal-title" variant="h4">
              {detailsData.subTitle}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          flexShrink: 0,
          gap: 3,
        }}
      >
        {detailsData?.mainImg?.map((img: any) => (
          <img style={{ borderRadius: "24px" }} width="100%" src={img} />
        ))}
      </Box>

      {detailsData?.text?.map((text: any) => (
        <Box sx={{ mt: 2 }}>
          <Typography variant="h5" sx={{ mt: 2 }}>
            {text.title}
          </Typography>
          <Typography variant="h6" sx={{ mt: 2 }}>
            {text.content}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}

export default Apie;
