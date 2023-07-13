import React from 'react';
import './sidepan.css';
const Sidepan = ()  =>{
    return(
<div className="side-panel" id="side-panel">
  <div id="sidepanel-heading" className="heading">
    <span id="content-heading">USER PROFILE</span>
  </div>
  <iframe
    id="content-frame"
    style={{
      height: "90%",
      width: 400,
      border:"none",
      display: "block",      
      position: "absolute"

    }}
    src="https://apple.com"
  />
  <div data-position="left" className="side-bar">
    <div className="item">
     Emergency
    </div>
    <div className="item">
      Service Providers
    </div>
    <div className="item">
      Task Assignment
    </div>
    <div className="item">
      Available jobs
    </div>
    <div className="item">
      Fix schedule
    </div>
    <div className="item">
     Track progress
    </div>
    <div className="item">
     Inventory 
    </div>
    <div className="item">
     Check Expenses 
    </div>
    <div className="item bottom" id="show_hide">
      Security
    </div>
  </div>
</div>
    )
};
export default Sidepan;
