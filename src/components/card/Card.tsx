import { CardView, Wrapper, FrontImg, BackImg } from '../../styles/components/card/CardView'

import React from "react";




type CardType = {
  id: string;
  flipped: boolean;
  backImage: string;
  frontImage: string;
  clickable: boolean;
  matchingCardId: string;
};

type Props = {
  card: CardType;
  callback: (card: CardType) => void;
  virado: number;
};

const Card: React.FC<Props> = ({ card, callback, virado }) => {
  const handleClick = () => {
    if (card.clickable) callback(card);
  };

  return (
    <Wrapper onClick={handleClick}>
      <FrontImg flipped={virado>=0? true : card.flipped} src={card.frontImage} alt="card-front" />
      <BackImg flipped={virado>=0? true : card.flipped} src={card.backImage} alt="card-back" />
    </Wrapper>
  );
};

export default Card;
