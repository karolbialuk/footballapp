import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Matches from "./components/Matches/Matches";
import Match from "./components/Match/Match";
import Navbar from "./components/Navbar/Navbar";
import DefaultMatches from "./components/DefaultMatches/DefaultMatches";
import Bookmarked from "./components/Bookmarked/Bookmarked";
import Club from "./components/Club/Club";
import Search from "./components/Search/Search";
import useStyles from "./styles";
import { Provider } from "react-redux";
import store from "./app/store";

function App() {
  const classes = useStyles();
  return (
    <Provider store={store}>
      <div>
        <BrowserRouter>
          <div className={classes.root}>
            <Navbar />
            <main className={classes.content}>
              <div className={classes.toolbar} />
              <Routes>
                <Route path="/" element={<DefaultMatches />} />
                <Route path="/:league_name" element={<Matches />} />
                <Route path="/match/:id" element={<Match />} />
                <Route path="/club/:id" element={<Club />} />
                <Route path="/search/" element={<Search />} />
                <Route path="/bookmarked/" element={<Bookmarked />} />
              </Routes>
            </main>
          </div>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
