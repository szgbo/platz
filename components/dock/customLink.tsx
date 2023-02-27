import Link from 'next/link';
import { FC } from 'react';

interface Props {
  href: string;
  children: React.ReactNode;
}

const CustomLink: FC<Props> = ({ href, children }) => {
  if (href.startsWith('http')) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link href={href}>
      {children}
    </Link>
  );
};

export default CustomLink;