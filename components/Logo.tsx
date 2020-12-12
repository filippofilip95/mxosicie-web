import React, { FC, useCallback, useEffect, useRef } from 'react';
import Image from 'next/image'

interface OwnProps {
}

type Props = OwnProps;

const Logo: FC<Props> = () => {
  const wrapper = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.addEventListener('mousemove', hoverPlane)

    return () => {
      document.removeEventListener('mousemove', hoverPlane)
    }
  })

  const hoverPlane = useCallback((e) => {
    const ax = -(window.innerWidth / 2 - e.pageX) / 20;
    const ay = (window.innerHeight / 2 - e.pageY) / 10;

    if (wrapper.current) {
      wrapper.current.setAttribute("style", "transform: rotateY(" + ax + "deg) rotateX(" + ay + "deg);");
    }

  }, []);


  return (
    <div ref={wrapper} className='hoverPlane'>
      <Image
        src='/images/logo.svg'
        height={500}
        width={500}
      />
    </div>
  );
};

export default Logo;
