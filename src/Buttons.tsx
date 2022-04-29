import { Fragment } from "react";
import {
  Button,
  ButtonProps,
  Container,
  Divider,
  Stack,
  Typography,
} from "@mui/material";

const sizes: ButtonProps["size"][] = ["small", "medium", "large"];

const variants: ButtonProps["variant"][] = ["text", "outlined", "contained"];

const colour: ButtonProps["color"][] = [
  "primary",
  "secondary",
  "error",
  "success",
  "info",
  "warning",
];

export const Buttons = () => (
  <Container maxWidth="xl" disableGutters>
    {sizes.map((size) => (
      <Fragment key={size}>
        <Typography variant="h3" gutterBottom>
          {size}
        </Typography>
        {variants.map((variant) => (
          <Fragment key={variant}>
            <Typography variant="h4" gutterBottom>
              {variant}
            </Typography>
            <Stack direction="row" spacing={2} sx={{ mb: 4 }}>
              {colour.map((colour) => (
                <Button
                  key={colour}
                  size={size}
                  variant={variant}
                  color={colour}
                >
                  {variant} {colour}
                </Button>
              ))}
            </Stack>
          </Fragment>
        ))}
        <Divider />
      </Fragment>
    ))}
  </Container>
);
