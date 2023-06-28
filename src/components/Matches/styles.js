import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  gridContainer: {
    paddingBottom: "20px",
    display: "flex",
    justifyContent: "center",
  },

  cardContent: {
    color: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  cardContentTeams: {
    color: "#fff",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    textAlign: "center",
  },

  paper: {
    width: "350px",
  },

  favButton2: {
    color: 'yellow',
  },

  favButton:{
    color: '#fff',
    '&:hover': {
      color: "yellow",
      transition: '0.3s ease',
   },
  },

  
}));
