import send from "../../icons/send.svg";
import facebook from "../../icons/facebook.svg";
import twitter from "../../icons/twitter.svg";
import linkedin from "../../icons/linkedin.svg";

import { Link } from 'react-router-dom';



import "./footer.css";

const Footer = () => {
  return (
    <footer className="text-white text-center text-lg-start bg-dark ">
      <div
        className="text-center p-3"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.2)",
          paddingBottom: "0rem",
        }}>
        © 2023 Copyright:
        <a className="text-white" href="#">
          Dummy.com
        </a>
      </div>
      {/* Copyright */}
    </footer>
    /* End of .container */
  );
};

export default Footer;
