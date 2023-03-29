import styles from './styles.module.css';

type Variant = 'download_button' | 'registation_button';

interface ButtonProps {
  text: string;
  variant?: Variant;
}

export const Button = ({ variant, text }: ButtonProps) => {
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
