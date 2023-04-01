import Head from 'next/head';
import styles from './media.module.css';

const Media = () => {
  return (
    <>
      <Head>
        <title>Media</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <div className={styles.container}>
        <h2>Media</h2>
        <div className={styles.image_container}>
          <img className={styles.image} src="https://pw.mail.ru/images/download/1024x768_18.jpg" />
          <img className={styles.image} src="https://pw.mail.ru/images/download/1024x768_19.jpg" />
          <img className={styles.image} src="https://pw.mail.ru/images/download/1024x768_16.jpg" />
          <img className={styles.image} src="https://pw.mail.ru/images/download/1024x768_17.jpg" />
        </div>
      </div>
    </>
  );
};

export default Media;
