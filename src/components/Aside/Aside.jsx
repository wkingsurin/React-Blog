import asideClasses from "./Aside.module.css";
import Item from "./Item";
import { useState } from "react";
import { blog } from "../../blog";
import { Context } from "./Context";

export default function Aside() {
  const [active, setActive] = useState("");

  return (
    <aside className={asideClasses.aside}>
      <Context.Provider value={{ active, setActive }}>
        <nav className={asideClasses.navigation}>
          <ul className={asideClasses.list}>
            {blog.themes.map((theme) => {
              return (
                <Item
                  key={theme.title}
                  text={theme.title}
                  anchor={theme.anchor}
                />
              );
            })}
          </ul>
        </nav>
      </Context.Provider>
    </aside>
  );
}
