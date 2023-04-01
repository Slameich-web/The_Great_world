import Navbar from './Navbar';
import styles from './Layout.module.css';
import Link from 'next/link';
import { Button } from './Button';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.global_wrapper}>
      <div className={styles.global}>
        <div className={styles.news}>
          <Button text="Активности" />
        </div>
        <div className={styles.logo_container}>
          <Link href="/">
            <a>
              <img className={styles.logo} src="https://img.youtube.com/vi/gqN50mBWsH0/maxresdefault.jpg" />
            </a>
          </Link>
        </div>
        <div className={styles.registation}>
          <Button variant="registation_button" text="Регистрация" />
          <Button variant="download_button" text="Скачать игру" />
        </div>
      </div>
      <Navbar>{children}</Navbar>
    </div>
  );
};

export default Layout;
