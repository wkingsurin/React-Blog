import linkClasses from "./Link.module.css";

export default function Link({ children }) {
  return (
    <a href="#" className={linkClasses.link}>
      {children}
    </a>
  );
}
