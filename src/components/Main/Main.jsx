import mainClasses from "./Main.module.css";
import BlogCard from "../BlogCard";
import BlogPage from "../BlogPage";

export default function Main() {
  return (
    <main className={mainClasses.main}>
      <section className={mainClasses.blogs}>
        <div className="container">
          <div className={mainClasses.content}>
            {/* <>
              <BlogCard theme="состояние" />
              <BlogCard theme="пропсы" />
              <BlogCard theme="хуки" />
            </> */}
            <BlogPage />
          </div>
        </div>
      </section>
    </main>
  );
}
