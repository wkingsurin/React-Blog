import mainClasses from "./Main.module.css";

export default function Main() {
  return (
    <main className={mainClasses.main}>
      <section className={mainClasses.blogs}>
        <div className="container">
          <div className={mainClasses.content}>
            <div className={mainClasses.item}>
              <div className={mainClasses.image}>
                <div className={mainClasses.imageTitle}>
                  <h2>состояние</h2>
                  <p>React</p>
                </div>
                <img src="./blog-image.jpg" alt="blog" />
              </div>
              <div className={mainClasses.description}>
                <h2 className={mainClasses.title}>состояние react</h2>
                <p className={mainClasses.text}>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Voluptatibus ex officia dolor animi fuga error repudiandae
                  unde earum cum...
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
