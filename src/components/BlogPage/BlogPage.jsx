import blogPageClasses from "./BlogPage.module.css";
import Chapter from "../Chapter";
import Paragraph from "../Chapter/Paragraph";
import Code from "../Chapter/Code";
import Link from "../Chapter/Paragraph/Link";
import Aside from "../Aside";

export default function BlogPage() {
  const codeText0 = `<Title text="Заголовок" />`;
  const codeText1 = `function Title(props) {
      return <h1>{props.text}</h1>;
    }`;
  const codeText2 = `function Title({ text }) {
        return <h1>{text}</h1>;
      }`;
  const codeText3 = `function Title({ text }) {
          return <h1>{text}</h1>;
        }`;

  return (
    <>
      <div className={blogPageClasses.content}>
        <Chapter title="Пропсы React" anchor="pass" paragraphs={[]} main>
          <Paragraph>
            Props - скоращение от слова (англ. properties - свойства). Lorem
            ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus ex
            officia dolor animi fuga error repudiandae unde earum cum, deleniti
            dolorum illum cupiditate, ullam pariatur quis incidunt reprehenderit
            quae velit.
          </Paragraph>
          <Paragraph>
            Передача пропсов в компонент, выглядит следующим образом:
          </Paragraph>
          <Code language="javascript">{codeText0}</Code>
        </Chapter>
        <Chapter title="Чтение" anchor="reading" paragraphs={[]}>
          <Paragraph>
            Props - скоращение от слова (англ. properties - свойства). Lorem
            ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus ex
            officia dolor animi fuga error repudiandae unde earum cum, deleniti
            dolorum illum cupiditate, ullam pariatur quis incidunt reprehenderit
            quae velit.
          </Paragraph>
          <Paragraph>Чтение пропса в компоненте:</Paragraph>
          <Code language="javascript">{codeText1}</Code>
        </Chapter>
        <Chapter
          title="Деструктуризация пропсов"
          anchor="descturcuring"
          paragraphs={[]}
        >
          <Paragraph>
            Props - скоращение от слова (англ. properties - свойства). Lorem
            ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus ex
            officia dolor animi fuga error repudiandae unde earum cum, deleniti
            dolorum illum cupiditate, ullam pariatur quis incidunt reprehenderit
            quae velit.
          </Paragraph>
          <Paragraph>Первый способ:</Paragraph>
          <Code language="javascript">{codeText2}</Code>
          <Paragraph>Второй способ:</Paragraph>
          <Code language="javascript">{codeText3}</Code>
        </Chapter>
        <Chapter title="Ссылки" anchor="links" paragraphs={[]}>
          <Link>https://react.dev/learn/passing-props-to-a-component</Link>
          <Link>https://react.dev/learn/passing-props-to-a-component</Link>
        </Chapter>
      </div>
      <Aside />
    </>
  );
}
