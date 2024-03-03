import itemClasses from "./Item.module.css";

export default function Item(props) {
  const { text, anchor } = props;

  return (
    <li className={itemClasses.link}>
      <a href={`#${anchor}`}>{text}</a>
    </li>
  );
}
