import { React, useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  useMediaQuery,
  Typography,
  TextField,
  InputAdornment,
  Drawer,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import BeenhereIcon from "@mui/icons-material/Beenhere";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import useStyles from "./styles";
import Sidebar from "../Sidebar/Sidebar";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import SportsTennisIcon from "@mui/icons-material/SportsTennis";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import { useDispatch } from "react-redux";
import { selectSport } from "../../features/currentSport";
import { selectSearch } from "../../features/currentSearch";
import { Link } from "react-router-dom";

function Navbar() {
  const dispatch = useDispatch();
  const [open, setopen] = useState(false);
  const [search, setSearch] = useState("");
  const mobile = useMediaQuery("(max-width:600px)");

  const classes = useStyles();
  const logo =
    "https://www.seekpng.com/png/full/207-2070268_livvo-bein-sports-gradiant-1hd-bein-sports-logo.png";
  return (
    <>
      <AppBar sx={{ background: "#201c1c" }} position="fixed">
        <Toolbar className={classes.toolbar}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              width: "500px",
            }}
          >
            {!mobile && (
              <Link to={"/"}>
                <img
                  style={{
                    width: "75px",
                    margin: "0 15px",
                  }}
                  alt="logo"
                  src={logo}
                />
              </Link>
            )}
            {mobile && (
              <IconButton
                size="large"
                edge="start"
                aria-label="open drawer"
                onClick={() => {
                  setopen((open) => !open);
                }}
              >
                <MenuIcon sx={{ color: "#fff" }} />
              </IconButton>
            )}

            {/* <IconButton>
              <Link to={"/bookmarked/"}>
                <BeenhereIcon
                  sx={{
                    color: "#fff",
                    width: "25px",
                    height: "25px",
                    m: "0 10px",
                  }}
                />
              </Link>
            </IconButton> */}

            {/* <div
              onClick={() => dispatch(selectSport("football"))}
              style={{
                display: "flex",
                cursor: "pointer",
                height: "60px",
              }}
            >
              <ListItem button>
                <SportsSoccerIcon sx={{ mr: "5px" }} />
                <Typography
                  variant="subtitle1"
                  noWrap
                  component="div"
                  sx={{
                    display: { xs: "none", sm: "block" },
                  }}
                >
                  Piłka Nożna
                </Typography>
              </ListItem>
            </div> */}

            {/* <div
              onClick={() => dispatch(selectSport("tennis"))}
              style={{
                display: "flex",
                height: "60px",
                cursor: "pointer",
              }}
            >
              <ListItem button>
                <SportsTennisIcon sx={{ mr: "5px" }} />
                <Typography
                  variant="subtitle1"
                  noWrap
                  component="div"
                  sx={{
                    display: { xs: "none", sm: "block" },
                    marginRight: "15px",
                  }}
                >
                  Tennis
                </Typography>
              </ListItem>
            </div> */}

            {/* <div
              onClick={() => dispatch(selectSport("basketball"))}
              style={{
                display: "flex",
                marginRight: "10px",
                height: "60px",
                cursor: "pointer",
              }}
            >
              <ListItem button>
                <SportsBasketballIcon sx={{ mr: "5px" }} />
                <Typography
                  variant="subtitle1"
                  noWrap
                  component="div"
                  sx={{
                    display: { xs: "none", sm: "block" },
                  }}
                >
                  Koszykówka
                </Typography>
              </ListItem>
            </div> */}
          </div>

          <div className={classes.searchContainer}>
            <TextField
              sx={{ ml: "30px" }}
              variant="standard"
              onInput={(e) => dispatch(selectSearch(e.target.value))}
              InputProps={{
                className: classes.input,
                startAdornment: (
                  <InputAdornment position="start">
                    <Link to={"/search/"}>
                      <SearchIcon />
                    </Link>
                  </InputAdornment>
                ),
              }}
            />
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              width: "500px",
            }}
          ></div>
        </Toolbar>
      </AppBar>
      <nav className={classes.navbar}>
        {mobile ? (
          <Drawer
            variant="temporary"
            open={open}
            onClose={() => {
              setopen((open) => !open);
            }}
            anchor="left"
            PaperProps={{
              sx: { backgroundColor: "#201c24" },
            }}
            classes={{ paper: classes.paper }}
          >
            <Sidebar />
          </Drawer>
        ) : (
          <Drawer
            variant="permanent"
            anchor="left"
            PaperProps={{
              sx: { backgroundColor: "#201c24" },
            }}
            classes={{ paper: classes.paper }}
          >
            <Sidebar />
          </Drawer>
        )}
      </nav>
    </>
  );
}

export default Navbar;
