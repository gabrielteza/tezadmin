import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@mui/icons-material/";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Tezadmin</span>
        </div>
        <div className="topRight">
        
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBag">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBag">2</span>
          </div>
        <div className="topbarIconContainer">
            <Settings />
          </div>
         <img src="https://cdn.iconscout.com/icon/free/png-512/avatar-372-456324.png" alt="" className="topAvatar"/>
        </div>
      </div>
    </div>
  );
}
