import { createTheme } from "@mui/material";
import { grey } from "@mui/material/colors";

const ZEGO_GREEN = "rgba(70, 225, 140)";
const ZEGO_PURPLE = "rgba(55, 25, 135)";

export const theme = createTheme({
  typography: {
    fontFamily: [
      '"Modern Era"',
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
  shape: {
    borderRadius: 8,
  },
  palette: {
    primary: {
      main: ZEGO_GREEN,
    },
    secondary: {
      main: ZEGO_PURPLE,
    },
    background: {
      default: grey[50],
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          textTransform: "none",
          letterSpacing: "0rem",
        },
      },
    },
  },
});
