import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import styles from './main.module.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
      <div className={styles.container}>
        <div>PERFECT WORLD GAMES</div>
        <div>VK Play</div>
        <div className={styles.pw_mark}>
          © Perfect World. Published by ООО "МАЙ.ГЕЙМЗ". All rights reserved. All trademarks are the property of their
          respective owners.
        </div>
        <div>12+</div>
      </div>
    </Layout>
  );
}

export default MyApp;
