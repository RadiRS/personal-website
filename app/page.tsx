import { Intro, RecentProjects } from '@/components/app';

const Home = () => {
  return (
    <section className='pb-24 pt-40'>
      <div className='container max-w-3xl'>
        <Intro />
        <RecentProjects />
      </div>
    </section>
  );
};

export default Home;
