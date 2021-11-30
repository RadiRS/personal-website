import Head from 'next/head';
import Footer from './shared/footer';
import Navbar from './shared/header';

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
