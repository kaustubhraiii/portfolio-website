import React from "react";
import { GitHub, LinkedIn } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import "../Styles/Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="header">
        <h1 className="title">Hey, My Name Is Kaustubh Rai</h1>
        <p className="subtitle">
          I'm an aspiring front-end developer always seeking for new
          opportunities
        </p>
      </div>
      <div className="social-media-buttons">
        <div className="social-button-github">
          <IconButton aria-label="GitHub">
            <GitHub />
            <span style={{ marginLeft: "5px" }}>GitHub</span>
          </IconButton>
        </div>
        <div className="social-button-linkedin">
          <IconButton aria-label="LinkedIn">
            <LinkedIn />
            <span style={{ marginLeft: "5px" }}>LinkedIn</span>
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Home;
