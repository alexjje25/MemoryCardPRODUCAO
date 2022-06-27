import React from 'react'
import {SucessGameView} from '../styles/layouts/SucessGame/SucessGameView'
import Image from 'next/image'

import TextField from '@mui/material/TextField';

export default function SucessGame() {

  return (
      <SucessGameView>
        <Image src='/assets/fundoCpf.png' layout="fill" className='image' />
        <div className='main'>
        <h1 className='title'>Parabéns!</h1>
        <p className='subTitle'>Voce é um especialista</p>

        <Image src='/assets/logo2.png' width={170} height={80} className='logo' />

        </div>
      </SucessGameView>
    )
}
