import type { AppProps } from 'next/app'
import React, { useEffect } from "react";
import 'styles/import.scss'
import TagManager, { TagManagerArgs } from 'react-gtm-module'
import { isProduction } from "utils/helpers";

const gtmParams: TagManagerArgs = {
  gtmId: 'GTM-P7P463Q'
}

function MyApp({Component, pageProps}: AppProps) {
  useEffect(() => {
    if (isProduction()) {
      TagManager.initialize(gtmParams)
    }
  }, [])

  return <Component {...pageProps} />
}

export default MyApp
