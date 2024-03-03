import asideClasses from "./Aside.module.css";
import Item from "./Item";
import { blog } from "../../blog";

export default function Aside() {
  return (
    <aside className={asideClasses.aside}>
      <nav className={asideClasses.navigation}>
        <ul className={asideClasses.list}>
          {blog.themes.map((theme) => {
            return (
              <Item
                key={theme.anchor}
                text={theme.title}
                anchor={theme.anchor}
              />
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
