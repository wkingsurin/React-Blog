import itemClasses from "./Item.module.css";
import { Context } from "../Context";
import { useContext } from "react";

export default function Item(props) {
  const { text, anchor } = props;
  const { active, setActive } = useContext(Context);

  const isActive = active === anchor;

  return (
    <li className={itemClasses.link}>
      <a
        href={`#${anchor}`}
        style={{ color: isActive ? "#EF8354" : "" }}
        onClick={() => setActive(anchor)}
      >
        {text}
      </a>
    </li>
  );
}
