import React from "react";
import { useParams, Link } from "react-router-dom";
import {
  useGetMatchInfoQuery,
  useGetPredictionsQuery,
} from "../../services/footballApi";
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
  ListItem,
  ListItemText,
  ListSubheader,
  ListItemIcon,
  SwipeableDrawer,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import yellow from "../../assets/icons/yellow.png";
import red from "../../assets/icons/red.png";
import goal from "../../assets/icons/goal.png";
import zmiana from "../../assets/icons/zmiana.svg";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import useStyles from "./styles";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
  },
}));

function Match() {
  const classes = useStyles();
  const params = useParams();
  const { data, error, isFetching } = useGetMatchInfoQuery(params.id);

  const {
    data: predictionData,
    error: predictionError,
    isFetching: predictionIsFetching,
  } = useGetPredictionsQuery(params.id);

  console.log(predictionData);

  console.log(predictionData?.response[0]?.comparsion?.form?.home);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Box className={classes.rootContainer} container>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Box className={classes.teamBox} item container>
            <Link
              className={classes.clubLink}
              to={"/club/" + data?.response[0]?.teams?.home?.id}
            >
              <Paper
                sx={{ background: "#201c1c", padding: '5px' }}
                className={classes.paperContainer}
              >
                <CardMedia
                  component="img"
                  image={data?.response[0]?.teams?.home?.logo}
                ></CardMedia>
                <Typography sx={{ mt: "10px", color: "#fff" }}>
                  {data?.response[0]?.teams?.home?.name.split(" ")[0]}
                </Typography>
              </Paper>
            </Link>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mt: "-7px",
              }}
              item
              container
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{ width: "60px", height: "60px", mb: "10px" }}
                    image={data?.response[0]?.league?.logo}
                  />

                  <Typography variant="h5" sx={{ color: "#fff", mb: "15px" }}>
                    {data?.response[0]?.league?.name}
                  </Typography>
                  <Divider
                    sx={{
                      width: "100%",
                      background: "#1a1a1a",
                    }}
                  />
                </Box>

                <Box sx={{ display: "flex" }}>
                  <Typography
                    sx={{ color: "#fff", m: "10px 8px" }}
                    variant="h6"
                  >
                    {new Date(
                      data?.response[0]?.fixture.date
                    ).toLocaleDateString("pl-PL")}{" "}
                  </Typography>

                  <Typography
                    sx={{ color: "#fff", m: "10px 8px" }}
                    variant="h6"
                  >
                    {new Date(
                      data?.response[0]?.fixture.date
                    ).toLocaleTimeString("pl-PL", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </Typography>
                </Box>

                {
                  <Typography sx={{ color: "#fff" }} variant="h3">
                    {data?.response[0]?.goals?.home}:
                    {data?.response[0]?.goals?.away}
                  </Typography>
                }

                <Typography
                  sx={{ color: "#fff", mt: "15px", textAlign: "center" }}
                  variant="h5"
                >
                  {data?.response[0]?.fixture?.venue?.name}
                </Typography>
              </Box>
            </Box>
            <Link
              className={classes.clubLink}
              to={"/club/" + data?.response[0]?.teams?.away?.id}
            >
              <Paper
                sx={{ background: "#201c1c", padding: '5px' }}
                className={classes.paperContainer}
              >
                <CardMedia
                  component="img"
                  image={data?.response[0]?.teams?.away?.logo}
                ></CardMedia>
                <Typography sx={{ mt: "10px", color: "#fff" }}>
                  {data?.response[0]?.teams?.away?.name?.split(" ")[0]}
                </Typography>
              </Paper>
            </Link>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            m: "40px 0",
            position: "relative",
            top: "-20px",
          }}
        >
          <Grid sx={{ display: "flex", justifyContent: "center"}} container>
            <Grid item>
              <Box>
                <Paper
                  className={classes.squadPaper}
                  sx={{ background: "#201c1c" }}
                >
                  <List
                    sx={{ color: "#fff" }}
                    subheader={
                      <ListSubheader
                        sx={{ color: "#fff", background: "#201c1c" }}
                        component="div"
                        id="nested-list-subheader"
                      >
                        Trener
                      </ListSubheader>
                    }
                  >
                    <ListItem sx={{ mt: "-15px", mb: "-5px" }}>
                      <ListItemText>
                        {data?.response[0]?.lineups[0]?.coach?.name}
                      </ListItemText>
                    </ListItem>
                  </List>

                  <Divider sx={{ width: "100%" }} />
                  <List
                    sx={{ color: "#fff" }}
                    subheader={
                      <ListSubheader
                        sx={{ color: "#fff", background: "#201c1c" }}
                        component="div"
                        id="nested-list-subheader"
                      >
                        Podstawowa XI
                      </ListSubheader>
                    }
                  >
                    <div style={{ marginTop: "-10px" }}>
                      {data?.response[0]?.lineups[0]?.startXI.map((item, i) => (
                        <ListItem
                          sx={{
                            display: "flex",
                            justifyContent: "flex-end",
                            height: "40px",
                          }}
                          key={i}
                        >
                          <ListItemText>{item.player.number}</ListItemText>
                          <ListItemText sx={{ ml: "-25px" }}>
                            {item.player.name}
                          </ListItemText>
                        </ListItem>
                      ))}
                    </div>
                  </List>

                  <Divider sx={{ width: "100%" }} />
                  <List
                    sx={{ color: "#fff" }}
                    subheader={
                      <ListSubheader
                        sx={{ color: "#fff", background: "#201c1c" }}
                        component="div"
                        id="nested-list-subheader"
                      >
                        ławka rezerwowa
                      </ListSubheader>
                    }
                  >
                    {data?.response[0]?.lineups[1]?.substitutes && (
                      <Accordion
                        sx={{
                          width: "100%",
                          background: "#201c1c",
                          zIndex: 1,
                        }}
                      >
                        <Box sx={{ display: "flex", justifyContent: "center" }}>
                          <AccordionSummary
                            expandIcon={
                              <KeyboardArrowDownIcon
                                sx={{
                                  fontSize: "2.3rem",
                                  color: "#fff",
                                }}
                              />
                            }
                          ></AccordionSummary>
                        </Box>
                        <AccordionDetails
                          sx={{
                            color: "#fff",
                            position: "relative",
                          }}
                        >
                          <List>
                            {data?.response[0]?.lineups[0]?.substitutes.map(
                              (item, i) => (
                                <ListItem
                                  sx={{
                                    display: "flex",
                                    justifyContent: "flex-end",
                                    height: "40px",
                                  }}
                                  key={i}
                                >
                                  <ListItemText>
                                    {item.player.number}
                                  </ListItemText>
                                  <ListItemText sx={{ ml: "-25px" }}>
                                    {item.player.name}
                                  </ListItemText>
                                </ListItem>
                              )
                            )}
                          </List>
                        </AccordionDetails>
                      </Accordion>
                    )}
                  </List>
                </Paper>
              </Box>
            </Grid>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "center",
                alignContent: "center",
              }}
            >
              <Grid item>
                <Paper
                  sx={{
                    background: "#201c1c",
                    color: "#fff",
                    m: "15px",

                    minHeight: " 500px",
                    height: "100%",
                  }}
                  className={classes.matchEvents}
                >
                  <Typography
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      m: "15px 0",
                      pt: "10px",
                    }}
                    variant="h5"
                  >
                    {data?.response[0]?.events.length > 0
                      ? "Przebieg meczu"
                      : "Mecz się jeszcze nie zakończył"}
                  </Typography>
                  <Divider sx={{ width: "100%" }} />
                  <List>
                    {data?.response[0]?.events.map((event, i) => (
                      <ListItem>
                        <ListItemText
                          primaryTypographyProps={{ fontSize: "0.8rem" }}
                          sx={{
                            textAlign:
                              event.team.id === data?.response[0]?.teams.home.id
                                ? "left"
                                : "right",
                          }}
                        >
                          <img
                            style={{
                              width:
                                event.detail === "Yellow Card" ||
                                event.detail === "Red Card"
                                  ? "15px"
                                  : event.detail.includes("Substitution")
                                  ? "25px"
                                  : event.detail === "Normal Goal"
                                  ? "25px"
                                  : "",
                              marginRight: "5px",
                              position: "relative",
                              top:
                                event.detail === "Yellow Card" ||
                                event.detail === "Red Card"
                                  ? "4px"
                                  : "8px",
                            }}
                            src={
                              event.detail === "Yellow Card"
                                ? yellow
                                : event.detail === "Normal Goal"
                                ? goal
                                : event.detail === "Red Card"
                                ? red
                                : ""
                              // : event.detail.includes("Substitution")
                              // ? zmiana
                              // : ""
                            }
                          />
                          ({event.detail}) {event.player.name}{" "}
                          {event.time.elapsed}'
                        </ListItemText>
                      </ListItem>
                    ))}
                  </List>
                </Paper>
              </Grid>
            </Box>

            <Box>
              <Grid item>
                <Paper
                  className={classes.squadPaper}
                  sx={{ background: "#201c1c" }}
                >
                  <List
                    sx={{ color: "#fff" }}
                    subheader={
                      <ListSubheader
                        sx={{ color: "#fff", background: "#201c1c" }}
                        component="div"
                        id="nested-list-subheader"
                      >
                        Trener
                      </ListSubheader>
                    }
                  >
                    <ListItem sx={{ mt: "-15px", mb: "-5px" }}>
                      <ListItemText>
                        {data?.response[0]?.lineups[1]?.coach?.name}
                      </ListItemText>
                    </ListItem>
                  </List>

                  <Divider sx={{ width: "100%" }} />
                  <List
                    sx={{ color: "#fff" }}
                    subheader={
                      <ListSubheader
                        sx={{ color: "#fff", background: "#201c1c" }}
                        component="div"
                        id="nested-list-subheader"
                      >
                        Podstawowa XI
                      </ListSubheader>
                    }
                  >
                    <div style={{ marginTop: "-10px" }}>
                      {data?.response[0]?.lineups[1]?.startXI.map((item, i) => (
                        <ListItem
                          sx={{
                            display: "flex",
                            justifyContent: "flex-end",
                            height: "40px",
                          }}
                          key={i}
                        >
                          <ListItemText>{item.player.number}</ListItemText>
                          <ListItemText sx={{ ml: "-25px" }}>
                            {item.player.name}
                          </ListItemText>
                        </ListItem>
                      ))}
                    </div>
                  </List>

                  <Divider sx={{ width: "100%" }} />
                  <List
                    sx={{ color: "#fff" }}
                    subheader={
                      <ListSubheader
                        sx={{ color: "#fff", background: "#201c1c" }}
                        component="div"
                        id="nested-list-subheader"
                      >
                        ławka rezerwowa
                      </ListSubheader>
                    }
                  >
                    {data?.response[0]?.lineups[1]?.substitutes && (
                      <Accordion
                        sx={{
                          width: "100%",
                          background: "#201c1c",
                          zIndex: 1251,
                        }}
                      >
                        <Box sx={{ display: "flex", justifyContent: "center" }}>
                          <AccordionSummary
                            expandIcon={
                              <KeyboardArrowDownIcon
                                sx={{
                                  fontSize: "2.3rem",
                                  color: "#fff",
                                }}
                              />
                            }
                          ></AccordionSummary>
                        </Box>
                        <AccordionDetails sx={{ color: "#fff" }}>
                          <List>
                            {data?.response[0]?.lineups[1]?.substitutes.map(
                              (item, i) => (
                                <ListItem
                                  sx={{
                                    display: "flex",
                                    justifyContent: "flex-end",
                                    height: "40px",
                                  }}
                                  key={i}
                                >
                                  <ListItemText>
                                    {item.player.number}
                                  </ListItemText>
                                  <ListItemText sx={{ ml: "-25px" }}>
                                    {item.player.name}
                                  </ListItemText>
                                </ListItem>
                              )
                            )}
                          </List>
                        </AccordionDetails>
                      </Accordion>
                    )}
                  </List>
                </Paper>
              </Grid>

              <Grid item>
                <Paper
                  className={classes.squadPaper2}
                  sx={{
                    background: "#201c1c",
                  }}
                >
                  <List sx={{ color: "#fff" }}>
                    <div>
                      <ListItem>
                        <ListItemText
                          sx={{ mt: "0" }}
                          className={classes.listItem}
                        >
                          <Typography variant="h6">Predykcje</Typography>
                        </ListItemText>
                      </ListItem>

                      <ListItem
                        sx={{
                          display: "flex",
                          justifyContent: "flex-end",
                          height: "40px",
                          mt: "-15px",
                        }}
                      >
                        <ListItemText className={classes.listItem}>
                          <Typography variant="subtitle2">
                            {
                              predictionData?.response[0]?.predictions?.winner
                                .name
                            }{" "}
                            {
                              predictionData?.response[0]?.predictions?.winner
                                .comment
                            }
                          </Typography>
                        </ListItemText>
                      </ListItem>

                      <ListItem
                        sx={{
                          display: "flex",
                          justifyContent: "flex-end",
                          height: "40px",
                        }}
                      >
                        <ListItemText className={classes.listItem}>
                          <Typography variant="h6">
                            Szanse na zwycięstwo
                          </Typography>
                        </ListItemText>
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          sx={{ mt: "-10px" }}
                          className={classes.listItem}
                        >
                          <Typography variant="subtitle2">
                            {predictionData?.response[0]?.teams?.home?.name}{" "}
                            {
                              predictionData?.response[0]?.predictions?.percent
                                ?.home
                            }{" "}
                            -{" "}
                            {
                              predictionData?.response[0]?.predictions?.percent
                                ?.away
                            }{" "}
                            {predictionData?.response[0]?.teams?.away?.name}
                          </Typography>
                        </ListItemText>
                      </ListItem>
                      <ListItem
                        sx={{
                          display: "flex",
                          justifyContent: "flex-end",
                          height: "40px",
                        }}
                      >
                        <ListItemText className={classes.listItem}>
                          Szanse na remis
                        </ListItemText>
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          sx={{ mt: "-15px" }}
                          className={classes.listItem}
                        >
                          {
                            predictionData?.response[0]?.predictions?.percent
                              ?.draw
                          }
                        </ListItemText>
                      </ListItem>
                    </div>
                  </List>
                </Paper>
              </Grid>
            </Box>
          </Grid>
        </Box>
      </Box>
    </div>
  );
}

export default Match;
