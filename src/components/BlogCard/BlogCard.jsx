import blogCardClasses from "./BlogCard.module.css";

export default function BlogCard(props) {
  const { theme } = props;

  return (
    <div className={blogCardClasses.card}>
      <div className={blogCardClasses.cardInner}>
        <div className={blogCardClasses.image}>
          <div className={blogCardClasses.imageTitle}>
            <h2>{theme}</h2>
            <p>React</p>
          </div>
          <img src="./icons/react.png" alt="react" />
        </div>
        <div className={blogCardClasses.description}>
          <a href="#" className={blogCardClasses.title}>
            {theme} react
          </a>
          <p className={blogCardClasses.text}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Voluptatibus ex officia dolor animi fuga error repudiandae unde
            earum cum...
          </p>
        </div>
      </div>
    </div>
  );
}
