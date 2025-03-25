import React from 'react'
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Style from "../Footer/footer.module.css"


function Footer() {
  return (
    <footer className={Style.footer_container}>
      <div className={Style.footer_section}>
        <img
          src="/logo2.png"
          alt="Evangadi Logo"
          className={Style.footer_logo}
        />
        <div className={Style.social_icons}>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookOutlinedIcon className={Style.icon} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon className={Style.icon} />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <YouTubeIcon className={Style.icon} />
          </a>
        </div>
      </div>
      <div className={Style.footer_section}>
        <h3 className={Style.use}>Useful Link</h3>
        <li>
          <a href="#">How it works</a>
        </li>
        <li>
          <a href="#">Terms of Service</a>
        </li>
        <li>
          <a href="#">Privacy policy</a>
        </li>
      </div>
      <div className={Style.footer_section}>
        <h3>Contact Info</h3>
        <p>
          <a
            href="https://www.evangadi.com/ "
            target="_blank"
            rel="noopener noreferrer"
          >
            Evangadi Networks
          </a>
        </p>
        <p>
          <a
            href="mailto:support@evangadi.com"
          >
            support@evangadi.com
          </a>
        </p>
        <p>
          <a href="tel:+12023862702">+1-202-386-2702</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer