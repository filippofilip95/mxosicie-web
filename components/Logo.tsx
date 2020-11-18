import React, { FC } from 'react';
import Image from 'next/image'

interface OwnProps {
}

type Props = OwnProps;

const Logo: FC<Props> = () => {
  return (
    <Image src='/images/logo.svg' height={500} width={500}/>
  );
};

export default Logo;
