import asideClasses from "./Aside.module.css";
import Item from "./Item";

export default function Aside() {
  return (
    <aside className={asideClasses.aside}>
      <nav className={asideClasses.navigation}>
        <ul className={asideClasses.list}>
          <Item text="Передача в компонент" />
          <Item text="Чтение" />
          <Item text="Деструктуризация пропсов" />
          <Item text="Ссылки" />
        </ul>
      </nav>
    </aside>
  );
}
