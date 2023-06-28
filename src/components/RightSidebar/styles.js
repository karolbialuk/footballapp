import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  root: {
    paddingTop: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },

  gridContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  matchCard: {
    width: "35vh",
    height: "50px",
    marginTop: "12px",
    display: "flex",
    alignItems: "center",
    justifyContent:'center',
  },
}));
