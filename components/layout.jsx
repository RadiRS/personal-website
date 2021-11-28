import Head from 'next/head';
import Footer from './footer';
import Navbar from './header';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Radi Rusadi - Portfolio Website</title>
      </Head>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
