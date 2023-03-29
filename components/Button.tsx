import styles from './styles.module.css';

export const Button = ({ variant, text }: any) => {
  if (variant === 'download_button') {
    return (
      <button className={styles.download_button}>
        <span>{text}</span>
      </button>
    );
  }
  if (variant === 'registation_button') {
    return (
      <button className={styles.registation_button}>
        <span>{text}</span>
      </button>
    );
  }
  return (
    <button className={styles.button}>
      <span>{text}</span>
    </button>
  );
};
