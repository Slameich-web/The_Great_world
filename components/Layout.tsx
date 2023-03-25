import Navbar from './navbar';
import styles from '../styles/Layout.module.css';

const Layout = ({ children }: any) => {
  return (
    <div className={styles.global_wrapper}>
      <div className={styles.registation}>
        <button className={styles.registation_button}>
          <span>Регистрация</span>
        </button>
        <button className={styles.download_button}>
          <span>Скачать игру</span>
        </button>
      </div>
      <Navbar>{children}</Navbar>
    </div>
  );
};

export default Layout;
