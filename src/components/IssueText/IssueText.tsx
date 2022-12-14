import React from "react";
import remarkGfm from "remark-gfm";
import ReactMarkdown from "react-markdown";
import { useState } from "react";

import cx from "classnames";
import styles from "./Issue.module.scss";

interface Issue {
  url: string;
  title: string;
  body: string;
  id: number;
}

interface IssueProps {
  dataElem: Issue;
}

export function IssueText({ dataElem }: IssueProps) {
  const [visible, setVisible] = useState(false);

  return (
    <button onClick={() => setVisible(!visible)}>
      <div className={cx(visible && styles["border-title"])}>
        <ReactMarkdown children={dataElem.title} remarkPlugins={[remarkGfm]} />
      </div>
      {visible && (
        <ReactMarkdown children={dataElem.body} remarkPlugins={[remarkGfm]} />
      )}
    </button>
  );
}
