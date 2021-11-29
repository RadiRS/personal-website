import Image from 'next/image';

const Hero = () => {
  return (
    <section className="box">
      <div className="box-inner grid-col-2 py-lg align-center">
        <div>
          <h1 className="text-xl">{`Hey there, I'm Radi`}</h1>
          <p className="text-lg">
            I’m a Mobile Developer <br />
            Building mobile application through Flutter and React Native
          </p>
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
