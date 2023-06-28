import React from "react";
import useStyles from "./styles";
import { Link } from "react-router-dom";
import { Divider, Box, Typography, Grid, Card, Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { useGetLiveMatchesQuery } from "../../services/footballApi";

function RightSidebar() {
  const classes = useStyles();

  let { competitionId } = useSelector((state) => state.currentCompetition);

  competitionId = +competitionId;

  const { data, error, isFetching } = useGetLiveMatchesQuery(competitionId);
  console.log(data);

  if(isFetching){
    return(
      console.log('essa')
    )
  }

   if (data.response.length > 0) {
    return (
      <div className={classes.root}>
        <Grid className={classes.gridContainer} container>

          {data.response.map((item, i) => (
            <Grid className={classes.gridItem} item>
            <Card sx={{ background: "#292929" }} className={classes.matchCard}>
              <Box>
                <Typography
                  variant="subtitle2"
                  sx={{ ml: "15px", color: "#fff" }}
                >
                 
                </Typography>
              </Box>
              <Box sx={{display: 'flex', width: '100%', m:'0px', alignItems: 'center', textAlign: 'center'}}>
                <Typography variant="body2" sx={{ color: "#fff", m:'0 5px'}}>
                {new Date(item.fixture.timestamp * 1000).toLocaleTimeString("pl-PL").split(':')[0]}:{new Date(item.fixture.timestamp * 1000).toLocaleTimeString("pl-PL").split(':')[1]}
                </Typography>
                <Typography variant="body2" sx={{ color: "#fff", m:'0 5px'}}>
                  {item.teams.home.name}
                </Typography>
                <Typography variant="body2" sx={{ color: "#fff", m: '0 5px'}}>
                {item.teams.away.name}
                </Typography>
              </Box>
              <Box>
                <Link to={"/match/" + item.fixture.id}>
                <Button
                  size="small"
                  sx={{ color: "#fff", border: "1px solid #fff", m: "0 10px" }}
                >
                  Zobacz
                </Button>
                </Link>
              </Box>
            </Card>
          </Grid>
          ))}
          
        </Grid>
      </div>
    );
  }

  if(data.response.length <= 0){
    return (
      <div className={classes.root}>
        <Grid className={classes.gridContainer} container>
          <Grid className={classes.gridItem} item>
            <Typography
              variant="h6"
              sx={{ color: "white", textTransform: "uppercase" }}
            >
              Brak meczów live
            </Typography>
          </Grid>
        </Grid>
      </div>
    );
  }

  
}

export default RightSidebar;
