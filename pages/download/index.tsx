import Head from 'next/head';
import { Button } from '../../components/Button';
import styles from './download.module.css';

const Download = () => {
  return (
    <>
      <Head>
        <title>Download</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <div className={styles.container}>
        <Button variant="download_button" text="Скачать игру" />
      </div>
    </>
  );
};

export default Download;
