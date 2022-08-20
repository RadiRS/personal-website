import {useEffect, useState} from 'react';
import {useRouter} from 'next/router';

import {marked} from 'marked';

import portfolios from '../static/data/portfolios';
import {Layout} from '../components';
import Image from 'next/image';
import {FaGooglePlay, FaLink, FaAppStoreIos, FaGithub} from 'react-icons/fa';

const Portfolio = () => {
  const [content, setContent] = useState('');
  const router = useRouter();

  const {id} = router.query;
  const portfolio = portfolios?.filter(item => item.id == id)[0];
  const links = portfolio?.links;

  useEffect(() => {
    fetch(portfolio.content)
      .then(res => res.text())
      .then(md => setContent(md));
  });

  return (
    <Layout>
      <div className="box">
        <div className="mb-lg">
          <Image
            alt=""
            width="100%"
            objectFit="cover"
            layout="responsive"
            height={50}
            src={portfolio?.images?.banner}
          />
          <div className="mt-lg">
            {links?.map(link => (
              <>
                {link.playstore ? (
                  <a
                    href={link.playstore}
                    target="_blank"
                    rel="noreferrer"
                    className="mr-sm">
                    <FaGooglePlay size={24} />
                  </a>
                ) : link.appstore ? (
                  <a
                    href={link.appstore}
                    target="_blank"
                    rel="noreferrer"
                    className="mr-sm">
                    <FaAppStoreIos size={24} />
                  </a>
                ) : link.github ? (
                  <a
                    href={link.github}
                    target="_blank"
                    rel="noreferrer"
                    className="mr-sm">
                    <FaGithub size={24} />
                  </a>
                ) : (
                  <a
                    href={link.appgallery || link.web}
                    target="_blank"
                    rel="noreferrer">
                    <FaLink size={24} />
                  </a>
                )}
              </>
            ))}
          </div>
        </div>
        <div dangerouslySetInnerHTML={{__html: marked(content)}} />
      </div>
    </Layout>
  );
};

export default Portfolio;
