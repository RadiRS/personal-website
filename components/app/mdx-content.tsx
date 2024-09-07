import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote/rsc';
import { highlight } from 'sugar-high';

const Code = ({ children, ...props }: any) => {
  const codeHtml = typeof children === 'string' ? highlight(children) : '';

  return <code dangerouslySetInnerHTML={{ __html: codeHtml }} {...props} />;
};

const components = {
  code: Code,
};

const MDXContent = (props: MDXRemoteProps) => {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  );
};

export default MDXContent;
