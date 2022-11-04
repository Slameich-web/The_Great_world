import Navbar from './navbar';
import styles from '../styles/Layout.module.css';

const Layout = ({ children }: any) => {
  return (
    <div className={styles.global_wrapper}>
      <div className={styles.registation}>
        <button className={styles.registation_button}>Регистрация</button>
        <button className={styles.download_button}>Скачать игру</button>
      </div>
      <Navbar>{children}</Navbar>
    </div>
  );
};

export default Layout;
