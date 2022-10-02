import axios from 'axios';

import BaseLayout from '../components/layouts/base-layout';

const Home = ({initialData, data}) => {
  console.log('initialData', initialData);
  console.log('data', data);

  return (
    <BaseLayout>
      <h1>Home Page</h1>
      <p>{data.title}</p>
    </BaseLayout>
  );
};

export const getStaticProps = async () => {
  const data = await getPosts();

  return {
    props: {
      initialData: [1, 2, 3, 4],
      data
    }
  };
};

const getPosts = async () => {
  try {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return res.data;
  } catch (error) {
    console.log('error', error);
  }
};

export default Home;
