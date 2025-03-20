import React from 'react'
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Style from "../Footer/footer.module.css"

function Footer() {
  return (
    <footer className={Style.footer_container}>
      <div className={Style.footer_section}>
        <img src="/logo2.png" alt="Evangadi Logo" className={Style.footer_logo} />
        <div className={Style.social_icons}>
          <FacebookOutlinedIcon className={Style.icon} />
          <InstagramIcon className={Style.icon} />
          <YouTubeIcon className={Style.icon} />
        </div>
      </div>
      <div className={Style.footer_section}>
        <h3 >Useful Link</h3>
        <a href="#">How it works</a>
        <a href="#">Terms of Service</a>
        <a href="#">Privacy policy</a>
      </div>
      <div className={Style.footer_section}>
        <h3>Contact Info</h3>
        <p>Evangadi Networks</p>
        <p>support@evangadi.com</p>
        <p>+1-202-555-2702</p>
      </div>
    </footer>
  );
}

export default Footer