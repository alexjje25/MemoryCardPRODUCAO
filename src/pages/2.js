import React from 'react'
import {GameWaitView} from '../styles/layouts/GameWait/GameWaitView'
import Image from 'next/image'

export default function Home() {

  return (

      <GameWaitView>
      <div className="game">

          <section>
            <Image src='/assets/fundoGame.png' layout="fill" className='image' />
          <div className='ContainerClock'>

          <Image src='/assets/imgs/clock.svg' width={200} height={150} className='clock' />
          <p className='clockMinutes'>00:10</p>
          </div>

          <div className='main'>
            <Image src='/assets/cardfront.png' width={200} height={150} className='cards' />
            <Image src='/assets/cardfront.png' width={200} height={150}  className='cards'/>
            <Image src='/assets/cardfront.png' width={200} height={150} className='cards' />
            <Image src='/assets/cardfront.png' width={200} height={150} className='cards' />
            <Image src='/assets/cardfront.png' width={200} height={150} className='cards' />
            <Image src='/assets/cardfront.png' width={200} height={150} className='cards' />
            <Image src='/assets/cardfront.png' width={200} height={150}  className='cards'/>
            <Image src='/assets/cardfront.png' width={200} height={150}  className='cards'/>
            <Image src='/assets/cardfront.png' width={200} height={150} className='cards' />
            <Image src='/assets/cardfront.png' width={200} height={150}  className='cards'/>
            <Image src='/assets/cardfront.png' width={200} height={150}  className='cards'/>
            <Image src='/assets/cardfront.png' width={200} height={150}  className='cards'/>
          </div>


            </section>
          </div>


          </GameWaitView>

    )
}
