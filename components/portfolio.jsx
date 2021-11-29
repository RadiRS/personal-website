import Image from 'next/image';
import InfoSection from './shared/info-section';

import portfolios from '../static/data/portfolios.js';
import Link from 'next/link';

const Portfolio = () => {
  return (
    <section id="portfolio" className="box">
      <div className="box-inner">
        <InfoSection
          section="Portfolio"
          title="Recent Work"
          desc="Here are some of the apps I’ve worked on recently. Click on thumbnails to view case studies of each project."
        />
        <div className="grid-col-2 mt-lg">
          {portfolios.map((item) => (
            <div key={item.id} className="portfolio-card">
              <Link href={`/portfolio?${item.id}`}>
                <a>
                  <Image
                    width={500}
                    height={350}
                    alt=""
                    src={item.images.banner}
                  />
                </a>
              </Link>
              <h2 className="text-lg">{item.title}</h2>
              <p className="text-md">{item.description}</p>
              <div className="wrapper-between">
                <p className="mr-lg text-semi-bold">{item.platform}</p>
                <p className="text-semi-bold">{item.times}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
