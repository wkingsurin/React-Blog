export const blog = {
  themes: [
    {
      title: "Пропсы React",
      paragraphs: [
        {
          text: `Props - скоращение от слова (англ. properties - свойства).
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus ex officia dolor animi fuga error repudiandae unde earum cum, deleniti dolorum illum cupiditate, ullam pariatur quis incidunt reprehenderit quae velit.`,
        },
        {
          text: `Передача пропсов в компонент, выглядит следующим образом:`,
        },
        {
          code: `<Title text="Заголовок" />`,
        },
      ],
      anchor: "pass",
    },
    {
      title: "Чтение",
      paragraphs: [
        {
          text: `Props - скоращение от слова (англ. properties - свойства).
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus ex officia dolor animi fuga error repudiandae unde earum cum, deleniti dolorum illum cupiditate, ullam pariatur quis incidunt reprehenderit quae velit.`,
        },
        { text: `Чтение пропса в компоненте:` },
        {
          code: `function Title(props) {
      return <h1>{props.text}</h1>;
  }`,
        },
      ],
      anchor: "reading",
    },
    {
      title: "Деструктуризация пропсов",
      paragraphs: [
        {
          text: `Props - скоращение от слова (англ. properties - свойства).
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus ex officia dolor animi fuga error repudiandae unde earum cum, deleniti dolorum illum cupiditate, ullam pariatur quis incidunt reprehenderit quae velit.`,
        },
        { text: `Первый способ:` },
        {
          code: `function Title({ text }) {
    return <h1>{text}</h1>;
}`,
        },
        { text: `Второй способ:` },
        {
          code: `function Title(props) {
      const { text } = props;
      return <h1>{text}</h1>;
  }`,
        },
      ],
      anchor: "destructuring",
    },
    {
      title: "Ссылки",
      paragraphs: [],
      links: [
        `https://react.dev/learn/passing-props-to-a-component`,
        `https://react.dev/learn/passing-props-to-a-component`,
      ],
      anchor: "links",
    },
  ],
};
