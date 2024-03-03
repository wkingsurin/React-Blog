import linkClasses from "./Link.module.css";

export default function Link({ children }) {
  return (
    <a href={children} className={linkClasses.link} target="blank">
      {children}
    </a>
  );
}
