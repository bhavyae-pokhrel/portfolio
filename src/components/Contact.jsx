import React from "react";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <>
      <div className="container contact" id="contact">
        <h1 className=" d-flex justify-content-center align-content-center" style={{marginTop:'-20px'}}>CONTACT ME</h1>
        <div
          className="contact-icon "
          data-aos="zoom-in-up"
          data-aos-duration="1000"
          style={{marginTop:'-30px'}}
        >
          <a href="https://www.instagram.com" target="_blank" className="items">
            <FaInstagram className="icons" />
          </a>
          <a href="https://www.facebook.com" target="_blank" className="items">
            <CiFacebook className="icons" />
          </a>
          <a href="https://www.linkedin.com/in/bhavyae-pokhrel-55299424a/" target="_blank" className="items">
            <CiLinkedin className="icons" />
          </a>
          <a href="https://twitter.com/i/flow/login" target="_blank" className="items">
            <FaSquareXTwitter className="icons" />
          </a>
          <a href="https://github.com/" target="_blank" className="items">
            <FaGithubSquare className="icons" />
          </a>
          <a
            href="mailto:bhavyaeprasadpokhrel@gmail.com"
            target="_blank"
            className="items"
          >
            <SiGmail className="icons" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
