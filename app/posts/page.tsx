import { getPosts } from '@/lib/post';
import { Posts } from '@/components/app';

const PostsPage = async () => {
  const posts = await getPosts();

  return (
    <section className='pb-24 pt-40'>
      <div className='container max-w-3xl'>
        <h1 className='title mb-12'>Posts</h1>
        <Posts data={posts} />
      </div>
    </section>
  );
};

export default PostsPage;
