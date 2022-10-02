import React from 'react';
import axios from 'axios';
import Link from 'next/link';

import BaseLayout from '../../components/layouts/base-layout';

const Portfolios = ({data}) => {
  const renderPosts = () => {
    return data.map(item => (
      <li key={item.id}>
        <Link href={`/portfolio/${item.id}`}>
          <a>{item.title}</a>
        </Link>
      </li>
    ));
  };

  return (
    <BaseLayout>
      <h1>Portfolios</h1>
      {renderPosts()}
    </BaseLayout>
  );
};

export const getStaticProps = async () => {
  const data = await getPosts();

  return {
    props: {
      data
    }
  };
};

const getPosts = async () => {
  try {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return res.data.splice(0, 10);
  } catch (error) {
    console.log('error', error);
  }
};

export default Portfolios;
