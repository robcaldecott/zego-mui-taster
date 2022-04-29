import { Box, Grid, Typography, useTheme } from "@mui/material";

const colours = [
  "primary.light",
  "primary.main",
  "primary.dark",
  "secondary.light",
  "secondary.main",
  "secondary.dark",
  "error.light",
  "error.main",
  "error.dark",
  "warning.light",
  "warning.main",
  "warning.dark",
  "success.light",
  "success.main",
  "success.dark",
  "info.light",
  "info.main",
  "info.dark",
];

const text = [
  "text.primary",
  "text.secondary",
  "text.disabled",
  "primary.main",
  "secondary.main",
  "error.main",
  "warning.main",
  "info.main",
  "success.main",
];

export const Colours = () => {
  const theme = useTheme();

  return (
    <>
      {/* Background colours */}
      <Typography variant="h4" component="h2" gutterBottom>
        Background colours
      </Typography>
      <Grid container spacing={1} sx={{ mb: 1 }}>
        {colours.map((colour) => {
          // TypeScript hates me
          const section =
            theme.palette[colour.split(".")[0] as keyof typeof theme.palette];
          const value = section[colour.split(".")[1] as keyof typeof section];

          return (
            <Grid key={colour} item xs={12} sm={4}>
              <Box
                sx={{
                  bgcolor: colour,
                  color: theme.palette.getContrastText(value),
                  p: 2,
                }}
              >
                {colour}
              </Box>
            </Grid>
          );
        })}
      </Grid>

      {/* Greys */}
      <Typography variant="h4" component="h2" gutterBottom>
        Greys
      </Typography>
      <Grid container spacing={1} sx={{ mb: 4 }}>
        {Object.entries(theme.palette.grey).map(([key, value]) => (
          <Grid key={key} item xs={12} sm={4}>
            <Box
              sx={{
                bgcolor: value,
                p: 2,
                border: 1,
                borderColor: "common.black",
                color: theme.palette.getContrastText(value),
              }}
            >
              grey[{key}] {value}
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* Text */}
      <Typography variant="h4" component="h2" gutterBottom>
        Text colours
      </Typography>
      {text.map((colour) => (
        <Typography
          key={colour}
          variant="h4"
          component="h3"
          gutterBottom
          sx={{ color: colour }}
        >
          {colour}
        </Typography>
      ))}
    </>
  );
};
