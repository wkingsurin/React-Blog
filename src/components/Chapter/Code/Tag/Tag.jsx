import tagClasses from "./Tag.module.css";

export default function Tag({ open, close, self, children }) {
  return (
    <>
      {self && (
        <code>
          &lt;<code className={tagClasses.tag}>{children}</code> /&tl;
        </code>
      )}
      {open && (
        <code>
          &lt;<code className={tagClasses.tag}>{children}</code>&tl;
        </code>
      )}
      {close && (
        <code>
          &lt;/ <code className={tagClasses.tag}>{children}&tl;</code>
        </code>
      )}
    </>
  );
}
