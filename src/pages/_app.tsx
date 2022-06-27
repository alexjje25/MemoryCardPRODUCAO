import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { AppProps } from 'next/app'

import { GlobalStyle } from '../styles/globals'
import { AppView } from '../styles/app/AppView'

import '../styles/globals.ts'


function MyApp({ Component, pageProps }: AppProps) {

  return (
    <>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp;
