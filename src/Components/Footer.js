import React from "react";
import { Instagram } from "@mui/icons-material";
import { Facebook } from "@mui/icons-material";
import { GitHub } from "@mui/icons-material";
import { LinkedIn } from "@mui/icons-material";
import "../Styles/Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="social-media-icons">
        <Instagram />
        <Facebook />
        <GitHub />
        <LinkedIn />
      </div>
      <p className="footer-text"> &copy; 2023 Kaustubh Rai</p>
    </div>
  );
};

export default Footer;
