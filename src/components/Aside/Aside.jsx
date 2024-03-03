import asideClasses from "./Aside.module.css";
import Item from "./Item";

export default function Aside() {
  return (
    <aside className={asideClasses.aside}>
      <nav className={asideClasses.navigation}>
        <ul className={asideClasses.list}>
          <Item text="Передача в компонент" anchor="pass" />
          <Item text="Чтение" anchor="reading" />
          <Item text="Деструктуризация пропсов" anchor="destructuring" />
          <Item text="Ссылки" anchor="links" />
        </ul>
      </nav>
    </aside>
  );
}
