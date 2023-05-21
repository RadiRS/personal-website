import React, {ReactNode} from 'react';
import Header from '../shared/header';
import Footer from '../shared/footer';

interface BaseLayoutProps {
  children: ReactNode;
}

const BaseLayout: React.FC<BaseLayoutProps> = (props: BaseLayoutProps) => {
  const {children} = props;

  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default BaseLayout;
