import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { Menu } from "@mui/icons-material";
import {
  AppBar,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";

const Main = styled("main")((props) => ({
  padding: props.theme.spacing(3),
}));

export const App = () => {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <AppBar color="secondary" position="sticky">
        <Toolbar>
          <IconButton
            color="inherit"
            onClick={() => setMenu((open) => !open)}
            edge="start"
            sx={{ mr: { xs: 1, sm: 2 } }}
          >
            <Menu />
          </IconButton>
          <Typography variant="h6">Zego Fleet</Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        anchor="left"
        open={menu}
        sx={{ "& .MuiDrawer-paper": { width: 240 } }}
        onClose={() => setMenu(false)}
      >
        <List>
          <ListItem button component={Link} to="/">
            <ListItemText primary="Layout" />
          </ListItem>
          <ListItem button component={Link} to="/styling">
            <ListItemText primary="Styling" />
          </ListItem>
          <ListItem button component={Link} to="/team">
            <ListItemText primary="Team" />
          </ListItem>
          <ListItem button component={Link} to="/colours">
            <ListItemText primary="Colours" />
          </ListItem>
          <ListItem button component={Link} to="/buttons">
            <ListItemText primary="Buttons" />
          </ListItem>
        </List>
      </Drawer>

      <Main>
        <Outlet />
      </Main>
    </>
  );
};

export default App;
