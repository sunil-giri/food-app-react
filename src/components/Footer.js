import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import "../styles/Footer.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Footer() {
  return (
    <>
      <div className="footer">
        <FacebookIcon /> <InstagramIcon /> <TwitterIcon /> <LinkedInIcon />
      </div>
      <p className="footer-text">&copy;2021 Foodpoint.com</p>
    </>
  );
}

export default Footer;
