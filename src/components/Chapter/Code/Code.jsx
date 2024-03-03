import codeClasses from "./Code.module.css";
// import SyntaxHighlighter from "react-syntax-highlighter";
// import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
const customStyle = {
  borderRadius: "7px",
  backgroundColor: "#0E1114",
  padding: "15px 20px",
};

import { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-duotone-sea.css";

export default function Code({ children, language }) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  // const codeString = `${children}`;
  // const codeString = `function Title(props) {
  //     return <h1>{props.text}</h1>;
  //   }`;

  return (
    <pre style={customStyle}>
      <code
        className={`language-${language}`}
        style={{ backgroundColor: "transparent" }}
      >
        {children}
      </code>
    </pre>
    // <SyntaxHighlighter
    //   language="jsx"
    //   style={a11yDark}
    //   customStyle={customStyle}
    // >
    //   {codeString}
    // </SyntaxHighlighter>
  );
}
