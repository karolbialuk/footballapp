import { React, useState } from "react";
import { useSelector } from "react-redux";
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
import {
  useGetEndedMatchesQuery,
  useGetMatchesQuery,
  useGetDefaultMatchesQuery,
} from "../../services/footballApi";
import axios from "axios";
import useStyles from "./styles";
import { Link } from "react-router-dom";
import BeenhereIcon from "@mui/icons-material/Beenhere";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import RightSidebar from "../RightSidebar/RightSidebar";

function DefaultMatches() {
  const classes = useStyles();

  const competitionId = 39;
  const [open, setopen] = useState(false);
  const [button, setButton] = useState("first");
  const mobile = useMediaQuery("(max-width:600px)");

  const { data, error, isFetching } = useGetDefaultMatchesQuery();

  const {
    data: endedData,
    error: endedError,
    isFetching: endedIsFetching,
  } = useGetEndedMatchesQuery(competitionId);
  const mapingData = button === "first" ? endedData : data;

  console.log(mapingData);

  if (isFetching) {
    return (
      <Box display="flex" justifyContent="center">
        <CircularProgress size="4rem" />
      </Box>
    );
  }

  if (data?.response?.length) {
    return (
      <>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              height: "30px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button
              onClick={() => setButton("first")}
              sx={{
                color: "#fff",
                margin: " 0 20px",
                background: "#201c1c",
                borderBottom: button === "first" ? "2px solid #fff" : "",
              }}
            >
              Zakończone
            </Button>

            <Button
              onClick={() => setButton("seccond")}
              sx={{
                color: "#fff",
                background: "#201c1c",
                borderBottom: button === "seccond" ? "2px solid #fff" : "",
              }}
            >
              Przyszłe
            </Button>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#fff",
              m: "0 0 0 30px",
              paddingRight: { md: "370px" },
              display: { sm: "none", xs: "none", md: "block" },
              whiteSpace: "nowrap",
            }}
          >
            <Typography variant="h6">{data.response[0].league.name}</Typography>
          </Box>

          <Box>
            <IconButton
              onClick={() => {
                setopen((open) => !open);
              }}
            >
              <Typography sx={{ color: "#fff" }}>LIVE</Typography>
              <ArrowBackIcon
                sx={{ color: "#fff", margin: "0 10px", fontSize: "40px" }}
              />
            </IconButton>
          </Box>
        </div>

        <Grid className={classes.gridContainer} container spacing={3}>
          <Drawer
            variant="temporary"
            open={open}
            onClose={() => {
              setopen((open) => !open);
            }}
            anchor="right"
            PaperProps={{
              sx: { backgroundColor: "#201c24" },
            }}
            classes={{ paper: classes.paper }}
          >
            <RightSidebar />
          </Drawer>

          {mapingData?.response.map((match, i) => (
            <Grid item>
              <Grow in key={i} timeout={(i + 1) * 200}>
                <Card
                  sx={{
                    maxWidth: "300px",
                    height: "275px",
                    backgroundColor: "#201c1c",
                    pt: "5px",
                  }}
                >
                  <CardActions
                    sx={{ display: "flex", justifyContent: "center" }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "50%",
                      }}
                    >
                      <Typography sx={{ color: "#fff" }}>
                        {new Date(match.fixture.date).toLocaleDateString(
                          "pl-PL"
                        )}
                      </Typography>
                      <Typography sx={{ color: "#fff" }}>
                        {match.fixture.date.split("T")[1].slice(0, 5)}
                      </Typography>
                    </Box>
                  </CardActions>
                  <Divider sx={{ backgroundColor: "#100c14" }} />
                  <CardActionArea sx={{ height: "250px" }}>
                    <Link
                      style={{ textDecoration: "none" }}
                      to={"/match/" + match.fixture.id}
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
                            width: "120px",
                            height: "120px",
                            m: "0 15px",
                          }}
                          alt="green iguana"
                          image={match.teams.home.logo}
                        />

                        <CardMedia
                          component="img"
                          sx={{
                            width: "120px",
                            height: "120px",
                            m: "0 15px",
                          }}
                          alt="green iguana"
                          image={match.teams.away.logo}
                        />
                      </Box>

                      <CardContent className={classes.cardContentTeams}>
                        <Typography
                          variant="subtitle1"
                          sx={{ width: "40%", fontWeight: "bold" }}
                        >
                          {match.teams.home.name}
                        </Typography>

                        {mapingData === endedData && (
                          <Typography sx={{ width: "20%", m: "0 10px" }}>
                            {match.goals.home}:{match.goals.away}
                          </Typography>
                        )}

                        <Typography
                          variant="subtitle1"
                          sx={{ width: "40%", fontWeight: "bold" }}
                        >
                          {match.teams.away.name}
                        </Typography>
                      </CardContent>

                      <CardContent
                        className={classes.cardContent}
                        sx={{ mt: "-20px" }}
                      >
                        <Typography
                          sx={{
                            m: "0 20px",
                            width: "50%",
                            display: "flex",
                            justifyContent: "center",
                          }}
                        ></Typography>
                      </CardContent>
                    </Link>
                  </CardActionArea>
                  <Divider />
                </Card>
              </Grow>
            </Grid>
          ))}
        </Grid>
      </>
    );
  }
}

export default DefaultMatches;
