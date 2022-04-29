import { Box, Button, Stack, styled } from "@mui/material";

const Simple = styled("div")`
  background-color: rgba(70, 225, 140);
  color: #000;
  font-size: 2rem;
  border-radius: 1rem;
  padding: 1.5rem;
`;

const StyledButton = styled(Button)`
  background-color: red;
  color: white;
  padding-left: 1rem;
  padding-right: 1rem;
  text-transform: none;
  &:hover {
    background-color: darkred;
  }
`;

const StyledThemeCamelCase = styled("div")((props) => ({
  backgroundColor: props.theme.palette.secondary.main,
  color: props.theme.palette.common.white,
  fontSize: props.theme.typography.h4.fontSize,
  padding: props.theme.spacing(3),
  borderRadius: props.theme.shape.borderRadius,
  boxShadow: props.theme.shadows[24],
}));

const StyledThemeCSSCase = styled("div")(
  ({ theme }) => `
  background-color: ${theme.palette.secondary.light};
  color: ${theme.palette.common.white};
  font-size: ${theme.typography.h4.fontSize};
  padding: ${theme.spacing(2)};
  border-radius: ${theme.shape.borderRadius}px;
  box-shadow: ${theme.shadows[8]};
`
);

export const Styling = () => (
  <Stack direction="column" spacing={2} alignItems="flex-start">
    <Simple>Using styled</Simple>

    <StyledButton>Button</StyledButton>

    <StyledThemeCamelCase>Styled using CSS object</StyledThemeCamelCase>

    <StyledThemeCSSCase>Actual CSS rules 😀</StyledThemeCSSCase>

    <Box
      component="span"
      sx={{
        typography: { xs: "body1", sm: "h3", lg: "h2" },
        bgcolor: "rgb(255, 211, 7)",
        color: "text.primary",
        px: 1,
        py: { xs: 0.5, sm: 2 },
        borderRadius: (theme) => `${theme.shape.borderRadius}px`,
        minWidth: { xs: 80, sm: 400 },
        textAlign: "center",
        border: (theme) => `1px solid ${theme.palette.common.black}`,
      }}
    >
      ZE22 ABC
    </Box>
  </Stack>
);
