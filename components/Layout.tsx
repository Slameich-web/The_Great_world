import Navbar from './navbar';
import styles from '../styles/Layout.module.css';

const Layout = ({ children }: any) => {
  return (
    <div className={styles.global_wrapper}>
      <div className={styles.registation}>
        <button className={styles.registation_button}>Регистрация</button>
      </div>
      <Navbar>{children}</Navbar>
    </div>
  );
};

export default Layout;
