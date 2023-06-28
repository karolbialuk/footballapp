import React from 'react'
import useStyles from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { useGetSearchQuery } from '../../services/footballApi';
import {Link} from 'react-router-dom';
import {
  Grid,
  Box,
  Paper,
  Card,
  CardActions,
  CardContent,
  CardActionArea,
  CardMedia,
  Button,
  Typography,
  Divider,
  CircularProgress,
  IconButton,
  Drawer,
  useMediaQuery,
  Grow,
} from "@mui/material";

import { selectSearch } from "../../features/currentSearch";

function Search() {
    const dispatch = useDispatch();
    const classes = useStyles();
    const {searchId} = useSelector((state) => state.currentSearch);

    const {data, isFetching} = useGetSearchQuery(searchId);

    console.log(data);

    
    if (isFetching) {
      return (
        <Box display="flex" justifyContent="center">
          <CircularProgress size="4rem" />
        </Box>
      );
    }

    if (data.response) {
      return (
        <>
          <Grid className={classes.gridContainer} container spacing={2}>
            {data?.response?.map((team, i) => (
              <Grid item>
                <Grow in key={i} timeout={(i + 1) * 200}>
                  <Card
                    sx={{
                      maxWidth: "300px",
                      height: "280px",
                      backgroundColor: "#201c1c",
                      pt: "5px",
                    }}
                  >
                    <CardActionArea sx={{ height: "250px" }}>
                      <Link
                        style={{ textDecoration: "none" }}
                        to={"/club/" + team.team.id}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            mt: "10px",
                          }}
                        >
                          <CardMedia
                            component="img"
                            sx={{
                              width: "150px",
                              height: "150px",
                              m: "0 15px",
                            }}
                            alt="green iguana"
                            image={team.team.logo}
                          />

                        </Box>
  
                        <CardContent className={classes.cardContentTeams}>
                          <Typography
                            variant="subtitle1"
                            sx={{fontWeight: "bold", m: '0 5px', width: '150px'}}
                          >
                            {team.team.name}
                          </Typography>

                          <Typography
                            variant="subtitle1"
                            sx={{fontWeight: "bold"}}
                          >
                            {team.team.founded}
                          </Typography>
                        </CardContent>

                        
  
                      </Link>
                    </CardActionArea>
                  </Card>
                </Grow>
              </Grid>
            ))}
          </Grid>
        </>
      );
    }
}

export default Search