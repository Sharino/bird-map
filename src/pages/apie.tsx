import { Box, Typography } from "@mui/material";
import theme from "../theme";

function Apie({ detailsData }: any) {
  return (
    <Box sx={{}}>
      <Box
        sx={{
          display: "flex",
          gap: 2,
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
            <Typography
              id="modal-modal-title"
              variant={"h4"}
              sx={{
                [theme.breakpoints.down("sm")]: {
                  fontSize: 24,
                },
              }}
            >
              {detailsData.title}
            </Typography>
            <Typography
              id="modal-modal-title"
              variant={"h5"}
              sx={{
                [theme.breakpoints.down("sm")]: {
                  fontSize: 18,
                },
              }}
            >
              {detailsData.subTitle}
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                flexShrink: 0,
                gap: 2,
                pt: 2,
              }}
            >
              {detailsData?.mainImg?.map((img: any) => (
                <img style={{ borderRadius: "24px" }} width="100%" src={img} />
              ))}
            </Box>
          </Box>
        </Box>
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
