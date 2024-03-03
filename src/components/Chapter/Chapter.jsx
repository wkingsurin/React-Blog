import chapterClasses from "./Chapter.module.css";

export default function Chapter(props) {
  const { title, anchor, children, main } = props;

  return (
    <section className={chapterClasses.chapter} id={anchor}>
      <h2 className={chapterClasses.title} style={{ fontSize: main ? 24 : 20 }}>
        {title}
      </h2>
      <div className={chapterClasses.description}>{children}</div>
    </section>
  );
}
