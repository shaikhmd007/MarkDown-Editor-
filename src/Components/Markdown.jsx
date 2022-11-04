import { useState } from "react";
import "../App.css";
import ReactMarkdown from "react-markdown";

const Markdown = () => {
  const [markDown, setMarkdown] = useState();
  return (
    <>
      <div >
        <h2>This Is MarkDown Editor </h2>
      </div>
      <div className="container">
        <textarea
          value={markDown}
          onChange={(e) => setMarkdown(e.target.value)}
          className="textarea"
        ></textarea>
        <div className="output">
          <ReactMarkdown>{markDown}</ReactMarkdown>
        </div>
      </div>
    </>
  );
};

export default Markdown;
