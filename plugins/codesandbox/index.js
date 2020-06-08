import Button from "part:@sanity/components/buttons/default";
import React from "react";
import styles from "./styles.css";

function Sandbox() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h2 className={styles.title}>Code Sandbox</h2>
      </header>
      <div className={`${styles.content}`} style={{ padding: `0 1rem` }}>
        <p>It may take up to 2 mins before the preview site is build.</p>
      </div>
      <a
        className={styles.footer}
        style={{ textDecoration: "none" }}
        href="https://jpxt2-8000.sse.codesandbox.io"
        target="blank"
      >
        <Button>Open preview</Button>
      </a>
    </div>
  );
}

export default {
  name: "codesandbox",
  component: Sandbox,
};
