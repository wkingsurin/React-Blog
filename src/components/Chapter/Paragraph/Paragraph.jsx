import paragraphClasses from "./Paragraph.module.css";

export default function Paragraph({ children }) {
  return <p className={paragraphClasses.paragraph}>{children}</p>;
}
