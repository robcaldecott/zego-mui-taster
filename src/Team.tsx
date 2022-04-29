import { StarOutline } from "@mui/icons-material";
import {
  Avatar,
  Container,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  styled,
} from "@mui/material";

interface TeamMember {
  name: string;
  jobTitle: string;
  picture: string;
}

const team: TeamMember[] = [
  {
    name: "Cornelia Stan",
    jobTitle: "I Know Things",
    picture: "https://ca.slack-edge.com/T1BTRGUUC-U021GPSU4NB-b29e7da72c6a-512",
  },
  {
    name: "Egle Zitkeviciute",
    jobTitle: "Back End Wizard",
    picture: "https://ca.slack-edge.com/T1BTRGUUC-U02DSR3LRAQ-a21cc2d3518e-512",
  },
  {
    name: "May Chung",
    jobTitle: "Crafter of Components",
    picture: "https://ca.slack-edge.com/T1BTRGUUC-U027PMC6ZR8-d8f6059b5aa8-512",
  },
  {
    name: "Priyanka Kumari",
    jobTitle: "Tech Lead",
    picture: "https://ca.slack-edge.com/T1BTRGUUC-U01ED8DL4GZ-4abe137dcd74-512",
  },
  {
    name: "Samara Aiken",
    jobTitle: "Product Guru",
    picture: "https://ca.slack-edge.com/T1BTRGUUC-U01BQ3K3VLH-76f2a0f5a55e-512",
  },
  {
    name: "Tony Nikolov",
    jobTitle: "Will Code for Free",
    picture: "https://ca.slack-edge.com/T1BTRGUUC-U033HLNMZ50-3f293b8ed04e-512",
  },
  {
    name: "Marius Guei",
    jobTitle: "Smasher of Bits",
    picture: "https://ca.slack-edge.com/T1BTRGUUC-U02PJCA4RCP-8b864f240574-512",
  },
];

export const Team = () => (
  <Container maxWidth="sm" disableGutters>
    <Paper variant="outlined">
      <List disablePadding>
        {team.map(({ name, jobTitle, picture }, index, arr) => (
          <ListItem
            key={name}
            button
            divider={index < arr.length - 1}
            disableRipple
          >
            <ListItemAvatar>
              <Avatar src={picture} alt={name} />
            </ListItemAvatar>
            <ListItemText
              primary={name}
              secondary={jobTitle}
              sx={{
                "& .MuiListItemText-primary": {
                  color: "primary.dark",
                },
                "& .MuiListItemText-secondary": {
                  color: "secondary.light",
                },
              }}
            />
            <StarOutline color="info" />
          </ListItem>
        ))}
      </List>
    </Paper>
  </Container>
);

//#region
const StyledPaper = styled(Paper)`
  overflow: hidden;
`;

const StyledListItemText = styled(ListItemText)(({ theme }) => ({
  "& .MuiListItemText-primary": {
    color: theme.palette.primary.dark,
  },
  "& .MuiListItemText-secondary": {
    color: theme.palette.secondary.light,
  },
}));

const StyledListItemTextAlt = styled(ListItemText)(
  ({ theme }) => `
& .MuiListItemText-primary {
  color: ${theme.palette.primary.dark}
}
& .MuiListItemText-secondary {
  color: ${theme.palette.secondary.light}
}
`
);

export const TeamAlternative = () => (
  <Container maxWidth="sm" disableGutters>
    <StyledPaper variant="outlined">
      <List disablePadding>
        {team.map(({ name, jobTitle, picture }, index, arr) => (
          <ListItem key={name} button divider={index < arr.length - 1}>
            <ListItemAvatar>
              <Avatar src={picture} alt={name} />
            </ListItemAvatar>
            <StyledListItemText primary={name} secondary={jobTitle} />
            <StarOutline color="info" />
          </ListItem>
        ))}
      </List>
    </StyledPaper>
  </Container>
);
//#endregion
