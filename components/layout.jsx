import Head from 'next/head';
import Footer from './shared/footer';
import Navbar from './shared/header';

const Layout = ({ children }) => {
  return (
    <div style={{}}>
      <Head>
        <title>Radi Rusadi - Portfolio Website</title>
      </Head>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
