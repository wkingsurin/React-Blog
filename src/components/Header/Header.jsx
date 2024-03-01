import headerClasses from "./Header.module.css";

export default function Header() {
  return (
    <header className={headerClasses.header}>
      <div className="container">
        <div className={headerClasses.content}>
          <nav className={headerClasses.navigation}>
            <ul className={headerClasses.list}>
              <li
                className={headerClasses.page}
                style={{ order: 2, fontSize: 32 }}
              >
                <a href="#">Блог</a>
              </li>
              <li className={headerClasses.page}>
                <a href="#">Контакты</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
