import React from "react";
import {
  FaInstagramSquare,
  FaFacebookSquare,
  FaLinkedin,
  FaYoutube,
  FaTwitter
} from "react-icons/fa";
import { Link } from 'react-router-dom';

import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer-div">
        <h2 class="footer-heading">
          Gro<span>Globally</span>
        </h2>
        <div className="nav-Links">
          <p><a href={"/"}> Home </a> | <a href={'/about'}> About </a> | <Link to={'/services'}> Services </Link> | <a href={'/contact'}> Contact </a></p>
        </div><br/>
        <div className="footer-icon">
          <div>
            <a
              href=" https://www.facebook.com/people/GroGlobally/61559396619399/"
              target="_blank"
              rel="noopener noreferrer"
              class="icon"
            >
              <FaFacebookSquare />
            </a>
          </div>
          <div>
            <a
              href=" https://www.instagram.com/groglobally/"
              target="_blank"
              rel="noopener noreferrer"
              class="icon"
            >
              <FaInstagramSquare />
            </a>
          </div>
          <div>
            <a
              href=" https://in.linkedin.com/company/groglobally"
              target="_blank"
              rel="noopener noreferrer"
              class="icon"
            >
              <FaLinkedin />
            </a>
          </div>
          <div>
            <a
              href=" https://www.youtube.com/channel/UCU_hisWXntAaXz-PNwfFMiA"
              target="_blank"
              rel="noopener noreferrer"
              class="icon"
            >
             <FaYoutube />
            </a>
          </div>
          <div>
            <a
              href="https://x.com/groglobally"
              target="_blank"
              rel="noopener noreferrer"
              class="icon"
            >
              <FaTwitter />
            </a>
          </div>
          
        </div>_____________________________________________________________________________ <br></br>
        <div className="watermark">
          <p>Designed and Developed by GroGlobally<br/></p>
          <p className="copy">&#169; GroGlobally all rights reserved</p>

        </div>
      </footer>
    </>
  );
};

export default Footer;
