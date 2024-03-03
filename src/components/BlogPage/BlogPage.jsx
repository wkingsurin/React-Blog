import blogPageClasses from "./BlogPage.module.css";
import Chapter from "../Chapter";
import Paragraph from "../Chapter/Paragraph";
import Link from "../Chapter/Paragraph/Link";
import Aside from "../Aside";

import { blog } from "../../blog";

export default function BlogPage() {
  return (
    <>
      <div className={blogPageClasses.content}>
        {blog.themes.map((theme) => (
          <Chapter key={theme.title} title={theme.title} anchor={theme.anchor}>
            {theme.paragraphs.map((p) => {
              const hasCode = p.code ? true : false;
              return (
                <Paragraph key={p.id} code={hasCode ? p.code : false}>
                  {p.text}
                </Paragraph>
              );
            })}
            {theme.links &&
              theme.links.map((link) => <Link key={link}>{link}</Link>)}
          </Chapter>
        ))}
      </div>
      <Aside />
    </>
  );
}
