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
        <p>
          This preview version has no time limit and is ideal for long content
          editing sessions.
        </p>
        <p>
          The downside however, is that it may take up to 2 mins before the
          preview site is build.
        </p>
        <bold></bold>
      </div>
      <a
        className={styles.footer}
        style={{ textDecoration: "none" }}
        href="https://g42xp-8000.sse.codesandbox.io/"
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
