import Link from 'next/link';
import styles from './Navbar.module.css';
const Navbar = ({ children }: any) => {
  return (
    <>
      <div className={styles.navbar}>
        <Link href="/news">
          <a className={styles.link}>Новости</a>
        </Link>
        <Link href="/about">
          <a className={styles.link}>Об игре</a>
        </Link>
        <Link href="/media">
          <a className={styles.link}>Медиа</a>
        </Link>
        <Link href="/download">
          <a className={styles.link}>Скачать</a>
        </Link>
        <Link href="/community">
          <a className={styles.link}>Сообщество</a>
        </Link>
        <Link href="/forum">
          <a className={styles.link}>Форум</a>
        </Link>
        <Link href="/support">
          <a className={styles.link}>Поддержка</a>
        </Link>
      </div>
      <div className={styles.container}>{children}</div>
    </>
  );
};

export default Navbar;
