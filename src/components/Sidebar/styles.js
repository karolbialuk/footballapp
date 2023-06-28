import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  root: {
    paddingTop: "80px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    position: "relative",
    zIndex: "999",
  },

  list: {
    color: "#fff",
    width: "100%",
  },

  primary: {
    fontSize: "1px",
  },

  link: {
    color: "#fff",
    textDecoration: "none",
  },

  divider: {
    color: "#fff",
  },
}));
