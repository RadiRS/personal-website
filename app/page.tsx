import { Intro, RecentProjects } from '@/components/app';

const Home = () => {
  return (
    <section className='py-24'>
      <div className='container max-w-3xl'>
        <Intro />
        <RecentProjects />
      </div>
    </section>
  );
};

export default Home;
