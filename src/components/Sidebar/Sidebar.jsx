import React from "react";
import useStyles from "./styles";
import { Link } from "react-router-dom";
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  ListItemIcon,
  Box,
  CircularProgress,
  Typography,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { useGetCompetitionsQuery } from "../../services/footballApi";

import { selectCompetition } from "../../features/currentCompetition";
import icons from "../../assets/genres";

const football = [
  {
    label: "Premier League",
    img: "england",
    value: "premier_league",
    id: 39,
  },
  { label: "La Liga", img: "espania", value: "la_liga", id: 140 },
  { label: "Serie A", img: "italy", value: "serie_a", id: 135 },
  { label: "Bundesliga", img: "germany", value: "bundesliga", id: 78 },
  { label: "Ligue 1", img: "france", value: "ligue_1", id: 186 },
  {
    label: "Primeira Liga",
    img: "portugal",
    value: "primeira_liga",
    id: 94,
  },
  {
    label: "Belgian Pro League",
    img: "belgium",
    value: "belgian_pro_league",
    id: 144,
  },
  { label: "Eredivisie", img: "netherlands", value: "eredivisie", id: 88 },
  {
    label: "Major League Soccer",
    img: "usa",
    value: "major_league_soccer",
    id: 253,
  },
  { label: "Ekstraklasa", img: "poland", value: "ekstraklasa", id: 106 },

  { label: "Liga Mistrzów", img: "world", value: "liga_mistrzow", id: 2 },
  { label: "Liga Europy", img: "world", value: "liga_europy", id: 3 },
  {
    label: "Liga Konferencji Europy",
    img: "world",
    value: "liga_konferencji_europy",
    id: 848,
  },
  {
    label: "Liga Narodów UEFA",
    img: "world",
    value: "liga_narodow_uefa",
    id: 5,
  },
  {
    label: "Mistrzostwa Świata",
    img: "world",
    value: "mistrzostwa_swiata",
    id: 1,
  },
];
const tennis = [
  { label: "Australian Open", img: "world", value: 'australian_open' },
  { label: "French Open", img: "france", value: 'french_open' },
  { label: "US Open", img: "usa", value: 'us_open' },
  { label: "Wimbledon", img: "england", value: 'wimbledon' },
];
const koszykowka = [
  { label: "LNB", img: "france" },
  { label: "ACB", img: "espania" },
  { label: "Energa Basket Liga", img: "poland" },
  { label: "NBA", img: "usa" },
];

function Sidebar() {
  const dispatch = useDispatch();
  const { sportName } = useSelector((state) => state.currentSport);
  console.log(sportName);

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List className={classes.list}>
        <ListSubheader
          sx={{
            fontWeight: "bold",
            background: "#201c24",
            color: "#fff",
            fontSize: "1rem",
          }}
        >
          Rozgrywki
        </ListSubheader>

        {sportName === "football" &&
          football.map(({ label, value, img, id }) => {
            return (
              <Link key={label} className={classes.link} to={"/" + value}>
                <ListItem
                  onClick={() => dispatch(selectCompetition(id))}
                  button
                >
                  <ListItemIcon>
                    <img src={icons[img]} height="14px" />
                  </ListItemIcon>
                  <Typography
                    variant="subtitle1"
                    sx={{ ml: "-18px", fontSize: "0.9rem" }}
                  >
                    {label}
                  </Typography>
                </ListItem>
              </Link>
            );
          })}
        {sportName === "tennis" &&
          tennis.map(({ value, label, img }) => {
            return (
              <Link className={classes.link} key={label} to={"/" + value}>
                <ListItem
                  onClick={() => dispatch(selectCompetition(value))}
                  button
                >
                  <ListItemIcon>
                    <img src={icons[img]} height="14px" />
                  </ListItemIcon>
                  <Typography
                    variant="subtitle1"
                    sx={{ ml: "-18px", fontSize: "0.9rem" }}
                  >
                    {label}
                  </Typography>
                </ListItem>
              </Link>
            );
          })}
        {sportName === "basketball" &&
          koszykowka.map(({ value, label, img }) => {
            return (
              <Link className={classes.link} key={label} to="/">
                <ListItem
                  onClick={() => dispatch(selectCompetition(value))}
                  button
                >
                  <ListItemIcon>
                    <img src={icons[img]} height="14px" />
                  </ListItemIcon>
                  <Typography
                    variant="subtitle1"
                    sx={{ ml: "-18px", fontSize: "0.9rem" }}
                  >
                    {label}
                  </Typography>
                </ListItem>
              </Link>
            );
          })}

        <Divider sx={{ width: "100%", mt: "20px" }} />
      </List>
    </div>
  );
}

export default Sidebar;
