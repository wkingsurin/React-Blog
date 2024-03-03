import paragraphClasses from "./Paragraph.module.css";
import Code from "../Code";

export default function Paragraph({ children, code }) {
  return (
    <>
      <p className={paragraphClasses.paragraph}>{children}</p>
      {code && <Code language="javascript">{code}</Code>}
    </>
  );
}
