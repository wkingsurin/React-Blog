import { TelegramSVG, WhatsappSVG } from "../../assets/SVG";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="content">
          <ul className="list">
            <li className="link">
              <a href="#" className="icon">
                <WhatsappSVG />
              </a>
            </li>
            <li className="link">
              <a href="#" className="icon">
                <TelegramSVG />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
