import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "./styles/Button";
import styled from "styled-components";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <Wrapper>

      {/* footer section started */}

      <footer>
        <div className="container grid grid-three-column">
          {/* First column */}
          <div className="footer-about">
            <div className="footer-logo">
              <NavLink to="/Portfolio/">
              <img src="./images/logo.png" alt="logo" />
              </NavLink>
            </div>
            <p>Block 9 Gulistan e Jauhar, Karachi City, Sindh</p>
          </div>

          

          {/* Second column */}
          <div className="footer-social">
            <h3>Social Links</h3>
            <div className="footer-social--icons">
              <div>
              <a href="https://www.facebook.com/Tqsk01" target="_blank">
                <FaFacebook className="icons" />
                </a>
              </div>
              <div>
              <a href="www.linkedin.com/in/sheheryar0789/" target="_blank">
                <FaLinkedin className="icons" />
                </a>
              </div>
              <div>
              <a href="https://github.com/Sheheryar0789" target="_blank">
                <FaGithub className="icons" />
                </a>
              </div>
              <div>
                <a href="https://www.instagram.com/sher_e_01/" target="_blank">
                <FaInstagram className="icons" />
                </a>
              </div>
              <div>
                <a href="https://wa.me/923342097438" target="_blank">
                <FaWhatsapp className="icons" />
                </a>
              </div>
            </div>
          </div>

          {/* Fourth Column */}
          <div className="footer-contact">
            <h3>Phone</h3>
            <h3>+92 334 2097438</h3>
          </div>
        </div>

        {/* Bottom section */}
        <div className="footer-bottom--section">
          <hr />
          <div className="container grid grid-two-column">
            <p>
            &copy; {new Date().getFullYear()} Sheheryar. All Rights Reserved!
            </p>
            <div>
              <p>PRIVACY POLICY</p>
              <p>TERMS & CONDITIONS</p>
            </div>
          </div>
        </div>
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);
  }

  .footer-logo img{
    height: 10rem;
    margin-left: -1rem;
    filter: invert();
  }

  .contact-short-btn {
    justify-self: end;
    align-self: center;
  }

  .contact-short-btn {
    justify-self: end;
    align-self: center;
  }
  footer {
    padding: 5rem 0 5rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};
    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
    }
    p {
      color: ${({ theme }) => theme.colors.white};
    }
    .footer-social--icons {
      display: flex;
      gap: 2rem;
      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.white};
        .icons {
          color: ${({ theme }) => theme.colors.white};
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
        }
      }
    }
    .footer-bottom--section {
      padding-top: 9rem;
      hr {
        margin-bottom: 2rem;
        color: ${({ theme }) => theme.colors.hr};
        height: 0.1px;
      }
    }
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 95vw;
      padding: 2rem 0rem;
      display: flex;
      justify-content: center;
      align-items: center;
      .contact-short-btn {
        text-align: center;
        justify-self: flex-start;
      }
    }
    footer .footer-bottom--section {
      padding-top: 3.2rem;
    }
  }

  @media (max-width:${({theme})=>theme.media.mobile}){
    
    

    .contact-short{
      max-width: 95vw;
      padding: 2rem 0;
      display: flex;
      justify-content: center;
      align-items: center;

      .contact-short-btn{
        text-align: center;
        justify-self: flex-start;
      }
    }
    .footer-bottom--section{
      padding-top: 3.2rem;
    }
  }

`;

export default Footer;
