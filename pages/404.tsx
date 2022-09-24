import Link from 'next/link';
import styles from '../styles/error.module.css';
const Error = () => {
  return (
    <div className={styles.error}>
      <h2>Что-то пошло не так</h2>
      <div>
        <p className={styles.text}>
          Мы не смогли найти страницу, <br />
          <Link href="/">
            <a className={styles.link}>Вы можете вернуться на сраницу на которой были только что</a>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Error;
