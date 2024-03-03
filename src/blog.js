export const blog = {
  themes: [
    {
      title: "Пропсы React",
      paragraphs: [
        {
          text: `Props - скоращение от слова (англ. properties - свойства).
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus ex officia dolor animi fuga error repudiandae unde earum cum, deleniti dolorum illum cupiditate, ullam pariatur quis incidunt reprehenderit quae velit.`,
          id: 123,
        },
        {
          text: `Передача пропсов в компонент, выглядит следующим образом:`,
          id: 124,
        },
        {
          code: `<Title text="Заголовок" />`,
          id: 143,
        },
      ],
      anchor: "pass",
      id: 0,
    },
    {
      title: "Чтение",
      paragraphs: [
        {
          text: `Props - скоращение от слова (англ. properties - свойства).
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus ex officia dolor animi fuga error repudiandae unde earum cum, deleniti dolorum illum cupiditate, ullam pariatur quis incidunt reprehenderit quae velit.`,
          id: 3425,
        },
        { text: `Чтение пропса в компоненте:`, id: 234 },
        {
          code: `function Title(props) {
      return <h1>{props.text}</h1>;
  }`,
          id: 3452,
        },
      ],
      anchor: "reading",
      id: 1,
    },
    {
      title: "Деструктуризация пропсов",
      paragraphs: [
        {
          text: `Props - скоращение от слова (англ. properties - свойства).
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus ex officia dolor animi fuga error repudiandae unde earum cum, deleniti dolorum illum cupiditate, ullam pariatur quis incidunt reprehenderit quae velit.`,
          id: 5645,
        },
        { text: `Первый способ:`, id: 34562 },
        {
          code: `function Title({ text }) {
    return <h1>{text}</h1>;
}`,
          id: 8563,
        },
        { text: `Второй способ:`, id: 54756 },
        {
          code: `function Title(props) {
      const { text } = props;
      return <h1>{text}</h1>;
  }`,
          id: 974,
        },
      ],
      anchor: "destructuring",
      id: 2,
    },
    {
      title: "Ссылки",
      paragraphs: [],
      links: [
        `https://react.dev/learn/passing-props-to-a-component`,
        `https://react.dev/learn/passing-props-to-a-component`,
      ],
      anchor: "links",
      id: 3,
    },
  ],
};
