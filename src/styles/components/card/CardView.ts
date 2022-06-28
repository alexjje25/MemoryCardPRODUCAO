import styled, { css } from "styled-components";

export const CardView = styled.div<{hover: boolean}>`

  .flip-container { perspective: 1000; }

  .flip-container .flipper, .flip-container.hover .flipper {
    transform: ${({hover}) => hover? 'rotateY(180deg)' : null};
  }
  .flip-container, .front, .back {
    width: 100px;
    height: 100px;
  }

  .flipper {
    transition: 0.6s;
    transform-style: preserve-3d;
    position: relative;
  }

  .front, .back {
    backface-visibility: hidden;
    position: absolute;
    top: 0;
    left: 0;
  }

  .front { z-index: 2; }

  .back { transform: rotateY(180deg); }
`


export const Wrapper = styled.div`
  height: 100%;
  min-width: 100%;
  position: relative;
  perspective: 1000px;
  .front.flipped {
    z-index: 1;
    transform: rotateY(180deg);
  }
`;

type Props = {
  flipped: boolean;
};

const sharedStyles = css`
  width: 100%;
  height: 100%;
  transition: all 0.5s;
  backface-visibility: hidden;
  cursor: pointer;
  transform-style: preserve-3d;
  @media only screen and (max-width: 1920px) {
    width: 20vh;
    height: 20vh;
  }
`;

export const FrontImg =
  styled.img <
  Props >`
  ${sharedStyles}
  z-index: ${props => (props.flipped ? 2 : 1)};
  transform: ${props => (props.flipped ? "rotate(0deg)" : "rotateY(180deg)")};
`;

export const BackImg =
  styled.img <
  Props >`
  ${sharedStyles}
  z-index: ${props => (props.flipped ? 1 : 2)};
  transform: ${props => (props.flipped ? "rotateY(180deg)" : "rotate(360deg)")};
  position: absolute;
  top: 0px;
  left: 0px;
`;
