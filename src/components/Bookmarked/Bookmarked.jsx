import React from "react";
import { useSelector, useDispatch } from "react-redux";

function Bookmarked() {
  const { bookmarks } = useSelector((state) => state.currentBookmark);
  console.log(bookmarks);
  return <div>Bookmarked</div>;
}

export default Bookmarked;
