import codeClasses from "./Code.module.css";

export default function Code() {
  return (
    <code className={codeClasses.code}>
      &lt;<span className={codeClasses.tag}>Title</span>{" "}
      <span className={codeClasses.attribute}>text</span>
      <span className={codeClasses.operator}>=</span>
      <span className={codeClasses.text}>"Заголовок"</span> &gt;;
    </code>
  );
}
