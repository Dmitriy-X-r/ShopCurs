import { Button, Htag, P } from "./components";
import styles from "./page.module.css";
import React, { JSX } from "react";

export default function Home(): JSX.Element {
  return (
    <div className={styles.page}>
      <Htag tag="h1">Текст</Htag>
      <Button appearance="primary" arrow="right">Кнопка</Button>
      <Button appearance="ghost" arrow="down">Button</Button>

      <P size="18px">Большой</P>
      <P size="16px">Средний</P>
      <P size="14px">Маленький</P>
    </div>
  );
}
