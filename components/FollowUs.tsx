import React, { FC } from 'react';
import Image from 'next/image'
import style from 'components/followUs/FollowUs.module.scss'

type Props = {};

const FollowUs: FC<Props> = () => {

  return (
    <section className={style.followUs}>
      <h2>Sleduj nás na sociálnych sieťach</h2>
      <div className={style.socialIcons}>
        <a className={style.socialIcon} href='https://www.facebook.com/mxosicie/'>
          <Image
            unoptimized
            src='/images/fb-icon.svg'
            width={60}
            height={60}
          />
        </a>
        <a className={style.socialIcon} href='https://www.instagram.com/mx_osicie/'>
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
