import "./App.css";

export default function App() {
  return (
    <>
      <div className="wrapper">
        <header className="header">
          <div className="container">
            <div className="content">
              <nav className="navigation">
                <ul className="list">
                  <li className="page">Блог</li>
                  <li className="page">Контакты</li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
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
