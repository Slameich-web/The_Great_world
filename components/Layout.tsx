import Navbar from './navbar';

const Layout = ({ children }: any) => {
  return (
    <>
      <Navbar>{children}</Navbar>
    </>
  );
};

export default Layout;
