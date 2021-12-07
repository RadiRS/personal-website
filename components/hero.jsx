import Image from 'next/image';
import user from '../static/data/user';

const Hero = () => {
  const name = user.name.split(' ')[0];

  return (
    <section className="box">
      <div className="box-inner grid-col-2 py-lg align-center">
        <div>
          <h1 className="text-xl">{`Hey there, I'm ${name}`}</h1>
          <p className="text-lg mb-md">{user.intro}</p>
          <a href="#portfolio" className="btn button-primary uppercase">
            Check Out My Work
          </a>
        </div>
        <div>
          <Image
            width={600}
            height={490}
            src="/static/images/blogging.png"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
