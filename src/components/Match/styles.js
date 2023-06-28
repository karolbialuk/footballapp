import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  teamBox: {
    display: "flex",
    justifyContent: "space-between",
    maxWidth: "700px",
    width: "100%",
  },

  rootContainer: {
    padding: "40px 15px",
    paddingBottom: '100px',
    maxWidth: "1150px",
    width: "100%",
    background: "#201c24",
  },

  paperContainer: {
    maxWidth: "150px",
    width: "100%",
    height: "170px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  squadPaper: {
    width: "300px",
    height: "645px",
    marginBottom: "35px",
    marginTop: "35px",
  },
  squadPaper2: {
    width: "300px",
    height: "250px",
    marginBottom: "35px",
    marginTop: "35px",
  },

  matchEvents: {
    minHeight: "200px",
    top: "20px",
    width: "450px",
    marginTop: "10px",
  },

  clubLink: {
    textDecoration: "none",
    color: "#fff",
  },

  predictionContainer: {
    display: "flex",
    justifyContent: "center",
  },

  predictionPaper: {
    background: "#fff",
    maxWidth: "800px",
    width: "100%",
  },

  listItem: {
    textAlign: "center",
  },
}));
