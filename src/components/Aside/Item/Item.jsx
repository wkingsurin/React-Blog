import itemClasses from "./Item.module.css";

export default function Item(props) {
  const { text } = props;

  return (
    <li className={itemClasses.link}>
      <a href="#pass">{text}</a>
    </li>
  );
}
