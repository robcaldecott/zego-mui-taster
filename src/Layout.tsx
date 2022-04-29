import { Close } from "@mui/icons-material";
import {
  Breakpoint,
  Container,
  Grid,
  IconButton,
  Paper,
  Stack,
  styled,
  Typography,
} from "@mui/material";

const StyledPaper = styled(Paper)((props) => ({
  padding: props.theme.spacing(2),
  backgroundColor: props.theme.palette.primary.light,
}));

export const Layout = () => (
  <>
    <Typography variant="h6" gutterBottom>
      Containers
    </Typography>
    <Container>
      <StyledPaper>Default container</StyledPaper>
    </Container>

    {(["xs", "sm", "md", "lg", "xl"] as Breakpoint[]).map((size) => (
      <Container key={size} maxWidth={size} sx={{ my: 2 }}>
        <StyledPaper>Container, no gutters, max width = {size}</StyledPaper>
      </Container>
    ))}

    <Typography variant="h6" gutterBottom>
      Stacks
    </Typography>
    <Stack direction="row" spacing={2} flexWrap="wrap" sx={{ mb: 2 }}>
      {[...Array(4).keys()].map((key) => (
        <StyledPaper key={key}>Horizontal stack item</StyledPaper>
      ))}
    </Stack>
    <Stack direction="column" spacing={2} sx={{ mb: 2 }}>
      {[...Array(4).keys()].map((key) => (
        <StyledPaper key={key}>Vertical stack item</StyledPaper>
      ))}
    </Stack>

    <Typography variant="h6" gutterBottom>
      Layout Grid
    </Typography>
    <Grid container spacing={2}>
      <Grid item xs={12} sm={4}>
        <StyledPaper>Grid item</StyledPaper>
      </Grid>
      <Grid item xs={12} sm={4}>
        <StyledPaper>Grid item</StyledPaper>
      </Grid>
      <Grid item xs={12} sm={4}>
        <StyledPaper>Grid item</StyledPaper>
      </Grid>
      <Grid item xs={6}>
        <StyledPaper>Grid item</StyledPaper>
      </Grid>
      <Grid item xs={6}>
        <StyledPaper>Grid item</StyledPaper>
      </Grid>

      <Grid item xs={12} sm>
        <StyledPaper>Fill remaining width</StyledPaper>
      </Grid>
      <Grid item xs={12} sm={1}>
        <StyledPaper>Small</StyledPaper>
      </Grid>

      <Grid item xs={12}>
        <Grid container spacing={2}>
          <Grid item xs="auto">
            <StyledPaper>Fit to content</StyledPaper>
          </Grid>
          <Grid item xs>
            <StyledPaper>Fill</StyledPaper>
          </Grid>
          <Grid item xs>
            <StyledPaper>Fill</StyledPaper>
          </Grid>
        </Grid>
      </Grid>
    </Grid>

    <Paper sx={{ mt: 2, p: 1 }}>
      <Grid container alignItems="center">
        <Grid item xs zeroMinWidth>
          <Typography variant="h5" noWrap>
            This title will fill the remaining width of the grid
          </Typography>
        </Grid>
        <Grid item>
          <IconButton>
            <Close />
          </IconButton>
        </Grid>
      </Grid>
    </Paper>
  </>
);
