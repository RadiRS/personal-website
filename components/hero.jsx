import Image from 'next/image';
import Link from 'next/link';
import user from '../static/data/user';

const Hero = () => {
  const name = user.name.split(' ')[0];

  return (
    <section className="box">
      <div className="box-inner grid-col-2 py-lg align-center">
        <div>
          <h1 className="text-xl">{`Hey there, I'm ${name}`}</h1>
          <p className="text-lg mb-md">{user.intro}</p>
          <Link href="/portfolio">
            <a className="btn button-primary uppercase">Check Out My Work</a>
          </Link>
        </div>
        <div>
          <img
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
