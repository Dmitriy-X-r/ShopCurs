'use client'

import { Button, Htag, P, Tag } from "./components";
import styles from "./page.module.css";
import React, { JSX, useState } from "react";

export default function Home(): JSX.Element {

  const [counter, setCounter] = useState(0);

  return (
    <div className={styles.page}>
      <Htag tag="h1">{counter}</Htag>
      <Button appearance="primary" arrow="right" onClick={() => setCounter(x => x + 1)}>Кнопка</Button>
      <Button appearance="ghost" arrow="down">Button</Button>

      <P size="18px">Большой</P>
      <P size="16px">Средний</P>
      <P size="14px">Маленький</P>

      <Tag>Обычный</Tag>
      <Tag size="m" color="red" href="https://github.com/Dmitriy-X-r/ShopCurs">Не Обычный</Tag>
      <Tag size="s" color="green">Обычный</Tag>
      <Tag color="primary">Обычный</Tag>
    </div>
  );
}
