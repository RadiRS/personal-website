import React, {ReactNode} from 'react';
import Header from '../shared/header';

interface BaseLayoutProps {
  children: ReactNode;
}

const BaseLayout: React.FC<BaseLayoutProps> = (props: BaseLayoutProps) => {
  const {children} = props;

  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default BaseLayout;
