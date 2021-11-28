import InfoSection from './shared/info-section';

const Portfolio = () => {
  return (
    <section id="portfolio" className="box">
      <div className="box-inner">
        <InfoSection
          section="Portfolio"
          title="Recent Work"
          desc="Here are some of the apps I’ve worked on recently. Click on thumbnails to view case studies of each project."
        />
      </div>
    </section>
  );
};

export default Portfolio;
