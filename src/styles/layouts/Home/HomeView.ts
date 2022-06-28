import styled from "styled-components";

export const HomeView = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  .logo{
    width:600px;
    height: 100px;
    margin-top: -90px;
  }

  .btn{
    width: 70%;
  height: 97px;
  min-height: 4rem;
  border-radius: 8px;
  background: rgb(2,0,36);
  background: linear-gradient(90deg, #294A9B 0%,rgba(28, 136, 248, 1) 35%, rgba(100, 136, 248, 1) 100%);
    border-radius: 0px 40px 0px 30px;
  font-family: 'Nunito Sans';
  font-weight: 700;
  font-size: 40px;
  line-height: 44px;
  text-align: center;
  border: none;
  cursor: pointer;
  position: relative;
    margin-top:100px;
  color: #FFFFFF;
  margin-left: 10px;

    :hover{
      background: linear-gradient(rgba(28, 136, 248, 1), rgba(55, 109, 168, 1));
    }
  }

  .btntitle{
    display:inline;
    font-size: 40px;

  }

  .main{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100vh;
  }

  @media only screen and (min-width: 1000px) {
  .main {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 850px;

}
  .title{
    background-color: red;
    font-size: 66px;
  /* Create the gradient. */
  background-image: linear-gradient(45deg, #4EA5E1, #2A4B9C);
    font-weight: 600;
  /* Set the background size and repeat properties. */
  background-size: 100%;
  background-repeat: repeat;
    font-family: 'Poppins';

    margin-left: 50px;
  /* Use the text as a mask for the background. */
  /* This will show the gradient as a text color rather than element bg. */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
  text-align: center;
  margin-top:-110rem;
  }


  .lomotif{
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100%;

    position: relative;
  }
`;
