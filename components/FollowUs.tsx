import React, { FC } from 'react';
import Image from 'next/image'
import style from 'components/followUs/FollowUs.module.scss'

type Props = {};

const FollowUs: FC<Props> = () => {

  return (
    <section className={style.followUs}>
      <h2>Sleduj nás na sociálnych sieťach</h2>
      <div className={style.socialIcons}>
        <a href='https://www.facebook.com/mxosicie/' target='_blank'>
          <Image
            unoptimized
            src='/images/fb-icon.svg'
            width={60}
            height={60}
          />
        </a>
        <a href='https://www.instagram.com/mx_osicie/' target='_blank'>
          <Image
            unoptimized
            src='/images/ig-icon.svg'
            width={60}
            height={60}
          />
        </a>
      </div>
    </section>
  );
};

export default FollowUs;
