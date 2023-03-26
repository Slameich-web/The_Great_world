import { Pagination } from 'antd';
import Head from 'next/head';
import 'antd/dist/antd.css';
import { useState } from 'react';
import styles from '../../styles/news.module.css';
import Link from 'next/link';

export interface NewsProps {
  news: News[];
}
export interface News {
  title: string;
  body: string;
  id: string;
}
export const getStaticProps = async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await response.json();
  console.log(data);
  return {
    props: { news: data }
  };
};

const News = ({ news }: NewsProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const lastPageIndex = currentPage * 10;
  const firstPageIndex = lastPageIndex - 10;
  const currentPageView = news.slice(firstPageIndex, lastPageIndex);
  return (
    <>
      <Head>
        <title>News</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <div>
        <h2>Новости</h2>
        {currentPageView.map((news: News) => {
          return (
            <div className={styles.container} key={news.id}>
              <h3>{news.title}</h3>
              <div>
                <p>{news.body}</p>
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
        })}
      </div>
      <Pagination
        showSizeChanger={false}
        defaultCurrent={1}
        onChange={(page) => setCurrentPage(page)}
        pageSize={10}
        total={news.length}
      />
    </>
  );
};

export default News;
