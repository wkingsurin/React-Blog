import "./App.css";
import Header from "../Header";

export default function App() {
  return (
    <>
      <div className="wrapper">
        <Header />
        <main className="main">
          <section className="blogs">
            <div className="container">
              <div className="content">
                <div className="item">
                  <div className="image">
                    <div className="image-title">
                      <h2>состояние</h2>
                      <p>React</p>
                    </div>
                    <img src="./blog-image.jpg" alt="blog" />
                  </div>
                  <div className="description">
                    <h2 className="title">состояние react</h2>
                    <p className="text">
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
      </div>
    </>
  );
}
