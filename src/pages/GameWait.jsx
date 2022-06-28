import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Card from '../components/card/Card'
import Logo from './imageModal.png'

import {
  GameWaitView,
  Container,
  CardsContainer,
} from '../styles/layouts/GameWait/GameWaitView'
import { shuffleArray } from '../utils/shuffle';
import { cardsVector, createBoard } from '../utils/board';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

// type CardType = {
//   id: string;
//   flipped: boolean;
//   backImage: string;
//   frontImage: string;
//   clickable: boolean;
//   matchingCardId: string;
//   matchCode: string;
// };

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',

  border: '1px solid hsla(160,90%,220%,0.7)',

  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
};

export default function Home() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [cards, setCards] = useState([]);
  const timeout = 1000;
  const [gameWon, setGameWon] = useState(false);
  const [matchedPairs, setMatchedPairs] = useState(0);
  const [clickedCard, setClickedCard] = useState(
    undefined
  );

    // We need ref in this, because we are dealing
    // with JS setInterval to keep track of it and
    // stop it when needed
    const Ref = useRef(null);

    // The state for our timer
    const [timer, setTimer] = useState('00:00');
    const [timer2, setTimer2] = useState('00:00');

    const [startGameCount, setStartGameCount] = useState(3)

    const getTimeRemaining = (e) => {
        const total = Date.parse(e) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const hours = Math.floor((total / 1000 / 60 / 60) % 24);
        return {
            total, hours, minutes, seconds
        };
    }

    const startTimer = (e) => {
        const { total, hours, minutes, seconds }
                    = getTimeRemaining(e);
        if (total >= 0) {

            setTimer(
              (seconds > 9 ? seconds : '0' + seconds)
            )
        }
    }

    const clearTimer = (e) => {
        setTimer('40');

        if (Ref.current) clearInterval(Ref.current);
        const id = setInterval(() => {
            startTimer(e);
        }, 1000)
        Ref.current = id;
    }

    const getDeadTime = () => {
        const deadline = new Date();

        deadline.setSeconds(deadline.getSeconds() + 40);
        return deadline;
    }

  useEffect(() => {
    setTimeout(() => {
      if (startGameCount>=0) {
        setStartGameCount(startGameCount -  1)
      }
    }, 1000);
  }, [startGameCount]);

  useEffect(() => {
    if (timer === '00' ){
      setOpen(true)
      setTimeout(() => {
        window.location.href = "/"
      }, 300000);
    }
  }, [timer]);

  useEffect(() => {
    console.log(startGameCount)
    if (startGameCount<=0) {
      clearTimer(getDeadTime());
    }
  }, [startGameCount]);

  const onClickReset = () => {
    clearTimer(getDeadTime());
  }

  useEffect(
    () => {
      if (matchedPairs === cards.length / 2 && cards.length != 0) {
        setGameWon(true)
        setTimeout(() => {
          window.location.href = "/"
        }, 30000);
      } else {
        setGameWon(false);
      }
    },
    [matchedPairs]
  );

  useEffect( () => {
    setCards(shuffleArray(cardsVector))
  }, []);

  function refreshPage() {
    window.location.reload();
  }

  const handleCardClick = (currentClickedCard) => {
    //Virar carta
    setCards(prev =>
      prev.map(
        card =>
          card.id === currentClickedCard.id
            ? { ...card, flipped: true, clickable: false }
            : card
      )
    );
    // Se for a primeira carta virada, permanecer com ela virada
    if (!clickedCard) {
      setClickedCard({ ...currentClickedCard });
      return;
    }

    console.log(currentClickedCard)

    //Checar se a carta corresponde ao seu par
    if (
      clickedCard.matchCode === currentClickedCard.matchCode ||
      clickedCard.matchCode === currentClickedCard.matchCode
    ) {
      setMatchedPairs(prev => prev + 1);
      setCards(prev =>
        prev.map(
          card =>
            card.matchCode === clickedCard.matchCode || card.matchCode === currentClickedCard.matchCode
              ? { ...card, clickable: false }
              : card
        )
      );
      setClickedCard(undefined);
      return;
    }

    // Se nao for o par correto
    setTimeout(() => {
      setCards(prev =>
        prev.map(
          card =>
            card.id === clickedCard.id || card.id === currentClickedCard.id
              ? { ...card, flipped: false, clickable: true }
              : card
        )
      );
    }, 1000);

    setClickedCard(undefined);
  };

  // verificar se todas as cartas foram encontras

  return (
    <GameWaitView>
      <section>
        <Container>

        <Image src='/assets/fundoGame.png' layout="fill" className='image' />
          <div className='ContainerClock'>
              <Image src='/assets/imgs/clock.svg' width={200} height={150} className='clock' />
              <p className='clockMinutes'>{timer}</p>
          </div>
            {gameWon &&
              <div>voce ganhou</div>
            }
          <CardsContainer>
            {cards.map(card =>
              <Card key={card.id} callback={handleCardClick} card={card} virado={startGameCount}/>
            )}
          </CardsContainer>
        </Container>

         {/* <Button onClick={handleOpen}>Open modal</Button>  */}
      <Modal style={{border: 'none', outline: 'transparent', display: 'flex', justifyContent:'center'}}
        open={startGameCount>=0}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <h1 style={{color:'white', fontSize:'70px', fontFamily: 'Khula'}}>{startGameCount}</h1>
      </Modal>



      <Modal style={{border: 'none', outline: 0, display: 'flex', justifyContent:'center'}} BackdropProps={{ style: {backgroundColor: "hsla(160,90%,220%,0.7)", border: 'none', outline:'0'}}}
        open={gameWon}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div style={{ outline: 0, display: 'flex', justifyContent:'center', alignItems:'center', flexDirection: 'column', width:'100px' }} >
        <p>{gameWon}</p>
        <h1 style={{color:'#001990', fontSize:'100px', fontWeight: '600', marginLeft:'0', textAlign:'center', fontFamily:'Poppins' }}>PARABÉNS!</h1>
        <p style={{color:'#001990', fontSize:'50px', fontWeight: '500', marginLeft:'-50px', whiteSpace: 'nowrap', marginTop:'-20px',fontFamily:'Poppins', marginTop:'-70px' }}>VOCE É UM ESPECIALISTA</p>
        <img src='/assets/logo.png' width={600} height={200}/>
        </div>
      </Modal>

      <Modal style={{border: 'none', outline: 0, display: 'flex', justifyContent:'center', }} BackdropProps={{ style: {backgroundColor: "hsla(160,90%,220%,0.7)", border: 'none', outline:'0'}}}

        open={open}

        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div style={{ outline: 0, display: 'flex', justifyContent:'center', alignItems:'center', flexDirection: 'column', width:'100px' }} >
        <p>{gameWon}</p>
        <h1 style={{color:'#001990', fontSize:'100px', fontWeight: '600', marginLeft:'0', textAlign:'center', fontFamily:'Poppins' }}>TEMPO ESGOTADO!</h1>
       <p style={{color:'#001990', fontSize:'50px', fontWeight: '500', marginLeft:'-50px', whiteSpace: 'nowrap', marginTop:'-20px',fontFamily:'Poppins', marginTop:'-70px' }}> VOLTE AMANHÃ </p>

        </div>
      </Modal>

        <div className='ContainerFooter'>
          <Image src='/assets/imgs/footer.png' width={200} height={61} className='footer' />
        </div>
      </section>
    </GameWaitView>
  )
}
