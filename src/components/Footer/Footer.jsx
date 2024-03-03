import { TelegramSVG, WhatsappSVG } from "../../assets/SVG";
import footerClasses from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={footerClasses.footer}>
      <div className="container">
        <div className={footerClasses.content}>
          <ul className={footerClasses.list}>
            <li className={footerClasses.link}>
              <a href="#" className="icon" name="whatsapp">
                <WhatsappSVG />
              </a>
            </li>
            <li className={footerClasses.link}>
              <a href="#" className="icon" name="telegram">
                <TelegramSVG />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
