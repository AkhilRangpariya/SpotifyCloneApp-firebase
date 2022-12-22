import React from "react";
import "./Player.css";
import Body from "./Body";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

/*TASKS
main home page divided into multiple 3 parts 
sidebar 
body
footer
*/
function Player({ spotify }) {
  return (
    <div className="player">
      <div className="player__body">
        <Sidebar />
        <Body spotify={spotify} />
      </div>
      <Footer spotify={spotify} />
    </div>
  );
}

export default Player;
