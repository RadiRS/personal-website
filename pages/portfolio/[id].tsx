import React from 'react';
import {useRouter} from 'next/router';
import axios from 'axios';

import BaseLayout from '../../components/layouts/base-layout';
import {Post} from './types';
import {GetStaticProps} from 'next/types';

const Portfolio = ({post}: {post: Post}) => {
  const router = useRouter();

  return (
    <BaseLayout>
      <button onClick={() => router.back()}>Back</button>
      <button onClick={() => router.reload()}>Reload</button>
      <button onClick={() => router.push('/')}>Push to Home</button>
      <button onClick={() => router.replace('/cv')}>Replace to CV</button>

      <h2>{post?.title}</h2>
      <p>{post?.body}</p>
    </BaseLayout>
  );
};

export const getStaticPaths = async () => {
  return {
    paths: ['/portfolio/:id'],
    fallback: true
  };
};

export const getStaticProps: GetStaticProps = async context => {
  const id = context?.params?.id;
  const post = await getPost(Number(id));

  return {
    props: {
      post: post || null
    }
  };
};

const getPost = async (id: number) => {
  try {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    return res.data;
  } catch (error) {
    console.log('error', error);
  }
};

export default Portfolio;
