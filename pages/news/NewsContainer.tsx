import React from 'react';
import styles from './news.module.css';
import Link from 'next/link';
import { News } from './types';

export const NewsContainer = ({ title, id, body }: News) => {
  return (
    <div className={styles.container} key={id}>
      <h3>{title}</h3>
      <div>
        <p>{body}</p>
      </div>
      <div className={styles.actions}>
        <div>
          <Link href="/">Обсудить</Link>
        </div>
        <div className={styles.more_info}>
          <Link href="/">Подробнее</Link>
        </div>
      </div>
    </div>
  );
};
