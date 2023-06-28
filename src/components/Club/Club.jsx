import React from "react";
import useStyles from "./styles";
import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
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
  List,
  ListItemText,
  ListItem,
  ListSubheader,
} from "@mui/material";

import {
  useGetClubInfoQuery,
  useGetClubLeagueQuery,
  useGetClubStatisticsQuery,
  useGetClubMatchesQuery,
  useGetClubNextMatchesQuery,
} from "../../services/footballApi";

function Club() {
  const classes = useStyles();
  // const { competitionId } = useSelector((state) => state.currentCompetition);
  let { id } = useParams();
  id = +id;

  const { data, isFetching, error } = useGetClubInfoQuery(id);

  const { data: leagueData } = useGetClubLeagueQuery(id);

  const league = leagueData?.response[0]?.league?.id;

  const { data: statsData, isFetching: statsIsFetching } =
    useGetClubStatisticsQuery({ league, id });

  const { data: matchData, isFetching: matchFetching } =
    useGetClubMatchesQuery(id);

  const { data: matchDataNext, isFetching: matchNextFetching } =
    useGetClubNextMatchesQuery(id);

  console.log(matchData);

  if (isFetching) {
    return (
      <Box display="flex" justifyContent="center">
        <CircularProgress size="4rem" />
      </Box>
    );
  }

  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Grid
            container
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box>
              <Box sx={{ display: "flex" }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    maxWidth: "550px",
                    width: "100%",
                  }}
                >
                  <Grid item>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "flex-end",
                        justifyContent: "center",
                      }}
                    >
                      <Paper
                        className={classes.imgContainer2}
                        sx={{
                          background: "#201c1c",
                          minWidth: "50px",
                          justifyContent: "center",
                          height: "100px",
                          width: "100px",
                        }}
                      >
                        <CardMedia
                          component="img"
                          image={statsData?.response?.league?.flag}
                        />
                      </Paper>
                      <Paper
                        className={classes.imgContainer}
                        sx={{
                          background: "#201c1c",
                          ml: "15px",
                          width: "100px",
                          justifyContent: "center",
                        }}
                      >
                        <CardMedia
                          component="img"
                          image={data?.response[0]?.team?.logo}
                        />
                        <Typography
                          sx={{
                            color: "#fff",
                            mt: "15px",
                            textAlign: "center",
                          }}
                        >
                          {statsData?.response?.team?.name}
                        </Typography>
                      </Paper>

                      <Paper
                        className={classes.imgContainer}
                        sx={{
                          background: "#201c1c",
                          ml: "15px",
                          width: "100px",
                          justifyContent: "center",
                        }}
                      >
                        <CardMedia
                          component="img"
                          image={statsData?.response?.league?.logo}
                        />
                        <Typography
                          sx={{
                            color: "#fff",
                            mt: "15px",
                            textAlign: "center",
                          }}
                        >
                          {statsData?.response?.league?.name}
                        </Typography>
                      </Paper>
                    </Box>
                  </Grid>

                  <Grid item>
                    <Box>
                      <Paper
                        className={classes.venueContainer}
                        sx={{
                          background: "#201c1c",
                          mt: "15px",
                          height: "450px",
                          justifyContent: "center",
                        }}
                      >
                        <CardMedia
                          sx={{
                            borderRadius: "2px",
                            alignItems: "flex-start",
                            width: "95%",
                          }}
                          component="img"
                          image={data?.response[0]?.venue?.image}
                        />
                        <Typography
                          variant="h6"
                          sx={{
                            color: "#fff",
                            mt: "15px",
                            position: "relative",
                          }}
                        >
                          {data?.response[0]?.venue?.name}
                        </Typography>
                      </Paper>
                    </Box>
                  </Grid>
                </Box>
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
              }}
            >
              <Grid item>
                <Box
                  sx={{
                    background: "#201c1c",
                    borderRadius: "5px",
                    m: "15px 7px",
                    padding: "0 10px",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      mt: "15px",
                      color: "#fff",
                      pt: "15px",
                      pb: "10px",
                    }}
                  >
                    Najbliższe mecze
                  </Typography>

                  <Divider sx={{ width: "100%", mt: "10px", mb: "10px" }} />
                  <List>
                    {matchDataNext?.response.map((item, i) => (
                      <Link
                        to={"/match/" + item.fixture.id}
                        style={{ textDecoration: "none", color: "#fff" }}
                      >
                        <ListItem>
                          <ListItemText className={classes.listItem2}>
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                textAlign: "center",
                                background: "#201c24",
                                padding: "7px",
                                borderRadius: "10px",
                              }}
                            >
                              <Box
                                sx={{
                                  display: "flex",
                                  justifyContent: "space-between",
                                  width: "100%",
                                  alignItems: "center",
                                }}
                              >
                                <Typography
                                  sx={{ width: "33%", padding: "0 25px" }}
                                  variant="subtitle2"
                                >
                                  {item?.teams?.home?.name}
                                </Typography>

                                <Box>
                                  <Typography variant="subtitle2">
                                    {new Date(
                                      item?.fixture?.date
                                    ).toLocaleDateString("pl-PL")}{" "}
                                  </Typography>

                                  <Typography>
                                    {new Date(
                                      item?.fixture?.date
                                    ).toLocaleTimeString("pl-PL", {
                                      hour: "2-digit",
                                      minute: "2-digit",
                                    })}
                                  </Typography>
                                </Box>

                                <Typography
                                  sx={{ width: "33%", padding: "0 25px" }}
                                  variant="subtitle2"
                                >
                                  {item?.teams?.away?.name}
                                </Typography>
                              </Box>
                            </Box>
                          </ListItemText>
                        </ListItem>
                      </Link>
                    ))}
                  </List>
                </Box>
              </Grid>

              <Grid item>
                <Box
                  sx={{
                    background: "#201c1c",
                    borderRadius: "5px",
                    m: "15px 7px",
                    padding: "0 10px",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      mt: "15px",
                      color: "#fff",
                      pt: "15px",
                      pb: "10px",
                    }}
                  >
                    Ostatnie mecze
                  </Typography>

                  <Divider sx={{ width: "100%", mt: "10px", mb: "10px" }} />
                  <List>
                    {matchData?.response.map((item, i) => (
                      <Link
                        to={"/match/" + item.fixture.id}
                        style={{ textDecoration: "none", color: "#fff" }}
                      >
                        <ListItem>
                          <ListItemText className={classes.listItem2}>
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                textAlign: "center",
                                background: "#201c24",
                                padding: "7px",
                                borderRadius: "10px",
                              }}
                            >
                              <Box
                                sx={{
                                  display: "flex",
                                  justifyContent: "space-between",
                                  width: "100%",
                                  alignItems: "center",
                                }}
                              >
                                <Typography
                                  sx={{ width: "33%", padding: "0 25px" }}
                                  variant="subtitle2"
                                >
                                  {item?.teams?.home?.name}
                                </Typography>

                                <Box>
                                  <Typography variant="subtitle2">
                                    {new Date(
                                      item?.fixture?.date
                                    ).toLocaleDateString("pl-PL")}{" "}
                                  </Typography>

                                  <Typography>
                                    {item?.score?.fulltime?.home} :{" "}
                                    {item?.score?.fulltime?.away}
                                  </Typography>
                                </Box>

                                <Typography
                                  sx={{ width: "33%", padding: "0 25px" }}
                                  variant="subtitle2"
                                >
                                  {item?.teams?.away?.name}
                                </Typography>
                              </Box>
                            </Box>
                          </ListItemText>
                        </ListItem>
                      </Link>
                    ))}
                  </List>
                </Box>
              </Grid>
            </Box>
          </Grid>
        </Box>
      </div>
    </div>
  );
}

export default Club;
