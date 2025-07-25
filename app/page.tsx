import { Htag } from "./components";
import styles from "./page.module.css";
import React, { JSX } from "react";

export default function Home(): JSX.Element {
  return (
    <div className={styles.page}>
      <Htag tag="h3">Текст</Htag>
    </div>
  );
}
