import {useState} from 'react';
import {useRouter} from 'next/router';
import {marked} from 'marked';

import portfolios from '../static/data/portfolios';
import {Layout} from '../components';
import Image from 'next/image';

const Portfolio = () => {
  const [content, setContent] = useState('');
  const router = useRouter();

  const {id} = router.query;
  const portfolio = portfolios.filter(item => item.id == id)[0];

  fetch(portfolio.content)
    .then(res => res.text())
    .then(md => setContent(md));

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
            src={portfolio.images.banner}
          />
        </div>
        <div dangerouslySetInnerHTML={{__html: marked(content)}} />
      </div>
    </Layout>
  );
};

export default Portfolio;
