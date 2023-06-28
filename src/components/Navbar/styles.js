import { makeStyles } from "@mui/styles";

const drawerWidth = 240;

export default makeStyles((theme) => ({
  searchContainer: {
    marginRight: "20px",

    [theme.breakpoints.down("sm")]: {
      display: "flex",
      justifyContent: "center",
      width: "100%",
    },
  },

  navbar: {
    position: "relative",
    zIndex: "0",
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },

  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  input: {
    color: theme.palette.mode === "light" && "black",
    filter: theme.palette.mode === "light" && "invert(1)",
    [theme.breakpoints.down("sm")]: {
      marginTop: "-10px",
      marginBottom: "10px",
    },
  },

  paper: {
    width: drawerWidth,
  },
}));
