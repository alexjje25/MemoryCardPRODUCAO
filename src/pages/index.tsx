import React, {useEffect, useRef, useState} from 'react'
import {HomeView} from '../styles/layouts/Home/HomeView'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Aos from 'aos';
import 'aos/dist/aos.css';
// Alternativamente:
// importa Lottie from 'react-lottie-player/dist/LottiePlayerLight'
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';

export default function Home() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    Aos.init({
        duration: 2000,
        once: false,
     });
}, []);

  const router = useRouter()

  return (
      <HomeView>
        <Image src='/assets/FUNDO.png' layout="fill" className='image' />
        <div className='main'>
          <p data-aos="fade-bottom" className='title'>VENHA JOGAR <br />E TESTE SEUS <br /> CONHECIMENTOS <br /> SOBRE </p>
          <Image data-aos="fade-left"src='/assets/logo.png' style={{marginLeft:'10px',position:'relative'}} width={600} height={200} />
          <button data-aos="fade-right" onClick={() => router.push('/checkoutCpf')} className='btn'>
          <p className='btntitle'>JOGO DA MEMÓRIA</p> </button>
        </div>



      </HomeView>
    )
}
