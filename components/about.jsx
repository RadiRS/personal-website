/* eslint-disable @next/next/no-img-element */
import InfoSection from './shared/info-section';

import user from '../static/data/user.js';

const About = () => {
  return (
    <section id="about" className="box">
      <div className="box-inner grid-col-2">
        <div>
          <InfoSection
            section="About Me"
            title={user.name}
            desc={user.description}
          />
          <div className="user-info mt-lg">
            <p className="text-md">Bio</p>
            {user.bio.map((item) => (
              <div key={item.year} className="wrapper-between">
                <p className="mw-100 mr-lg">{item.year}</p>
                <p>{item.event}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="img-profile-container">
          <img
            className="img-profile"
            alt="img-profile"
            width={340}
            height={500}
            src={user.avatar}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
