import {Hero, Portfolio, About, Contact, Layout} from '../components';

const Home = ({emailjs}) => {
  return (
    <Layout>
      <Hero />
      <Portfolio />
      <About />
      <Contact config={emailjs} />
    </Layout>
  );
};

export const getStaticProps = () => {
  const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const userId = process.env.REACT_APP_EMAILJS_USER_ID;

  return {
    props: {
      emailjs: {
        serviceId,
        templateId,
        userId
      }
    }
  };
};

export default Home;
