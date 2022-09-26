import Navbar from './navbar';
import styles from '../styles/Layout.module.css';

const Layout = ({ children }: any) => {
  return (
    <div className={styles.global_wrapper}>
      <Navbar>{children}</Navbar>
    </div>
  );
};

export default Layout;