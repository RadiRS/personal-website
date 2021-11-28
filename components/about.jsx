import InfoSection from './shared/info-section';

const About = () => {
  return (
    <section id="about" className="box">
      <div className="box-inner">
        <InfoSection
          section="About Me"
          title="Radi Rusadi"
          desc="I’m a Mobile Developer from Indonesia.  Building apps using platform like React Native and Flutter. I love playing guitar, swimming and basketball."
        />
      </div>
    </section>
  );
};

export default About;
