import Link from 'next/link';

const Navbar = ({ children }: any) => {
  return (
    <>
      <div>
        <Link href="/news">
          <a>Новости</a>
        </Link>
        <Link href="/about">
          <a>Об игре</a>
        </Link>
        <Link href="/media">
          <a>Медиа</a>
        </Link>
        <Link href="/download">
          <a>Скачать</a>
        </Link>
        <Link href="/community">
          <a>Сообщество</a>
        </Link>
        <Link href="/forum">
          <a>Форум</a>
        </Link>
        <Link href="/support">
          <a>Поддержка</a>
        </Link>
      </div>
      <div>{children}</div>
    </>
  );
};

export default Navbar;
