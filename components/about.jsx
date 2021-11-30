/* eslint-disable @next/next/no-img-element */
import { FaGithub, FaInstagram, FaLinkedinIn, FaCircle } from 'react-icons/fa';
import InfoSection from './shared/info-section';

import user from '../static/data/user.js';

const About = () => {
  return (
    <section id="about" className="box">
      <div className="box-inner grid-col-2">
        <div style={{ width: '110%' }}>
          <InfoSection
            section="About Me"
            title={user.name}
            desc={user.description}
          />
          <div className="grid-col-2 mb-md">
            <div>
              <p className="text-md">Programming Language</p>
              <div className="grid-col-2">
                {user.skill.programming.map((item) => (
                  <div key={item} className="wrapper-between-center">
                    <FaCircle color="#1E91D6" className="mr-sm" size={12} />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-md">Framework</p>
              <div className="grid-col-2">
                {user.skill.framework.map((item) => (
                  <div key={item} className="wrapper-between-center">
                    <FaCircle color="#1E91D6" className="mr-sm" size={12} />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="user-info mb-md">
            <p className="text-md">Bio</p>
            {user.bio.map((item) => (
              <div key={item.year} className="wrapper-between">
                <p className="mw-100 mr-lg">{item.year}</p>
                <p>{item.event}</p>
              </div>
            ))}
          </div>
          <div className="mb-md">
            <p className="text-md">Get in touch</p>
            <div className="wrapper-between">
              <a
                target="_blank"
                rel="noreferrer"
                className="mr-sm"
                href={user.socials.linkedin}
              >
                <FaLinkedinIn color="#F2D0A4" size={33} />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                className="mr-sm"
                href={user.socials.github}
              >
                <FaGithub color="#F2D0A4" size={33} />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                className="mr-lg"
                href={user.socials.instagram}
              >
                <FaInstagram color="#F2D0A4" size={33} />
              </a>
            </div>
          </div>
          <div>
            <a href="#">Get CV</a>
          </div>
        </div>
        <div className="img-profile-container" style={{ alignItems: 'center' }}>
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
