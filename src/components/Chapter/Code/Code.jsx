import { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-duotone-sea.css";

const customStyle = {
  borderRadius: "7px",
  backgroundColor: "#0E1114",
  padding: "15px 20px",
};

export default function Code({ children, language }) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <pre style={customStyle}>
      <code
        className={`language-${language}`}
        style={{ backgroundColor: "transparent" }}
      >
        {children}
      </code>
    </pre>
  );
}
