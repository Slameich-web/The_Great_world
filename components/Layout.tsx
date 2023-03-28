import Navbar from './navbar';
import styles from '../styles/Layout.module.css';
import Link from 'next/link';

const Layout = ({ children }: any) => {
  return (
    <div className={styles.global_wrapper}>
      <div className={styles.global}>
        <div className={styles.news}>
          <button className={styles.download_button}>
            <span>Активности</span>
          </button>
        </div>
        <div className={styles.logo_container}>
          <Link href="/">
            <a>
              <img className={styles.logo} src="https://img.youtube.com/vi/gqN50mBWsH0/maxresdefault.jpg" />
            </a>
          </Link>
        </div>
        <div className={styles.registation}>
          <button className={styles.registation_button}>
            <span>Регистрация</span>
          </button>
          <button className={styles.download_button}>
            <span>Скачать игру</span>
          </button>
        </div>
      </div>
      <Navbar>{children}</Navbar>
    </div>
  );
};

export default Layout;
