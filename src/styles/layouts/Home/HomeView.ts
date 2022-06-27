import styled from "styled-components";

export const HomeView = styled.main`
  width:100%;

  .image{
    width:1080px;
    height:1920px;
    margin-left: 10px;
    background-size: cover;

  }
  .logo{
    width:600px;
    height: 100px;
    margin-top: -90px;

  }
  .btn{
    width: 70%;
  height: 60px;
  min-height: 4rem;
  border-radius: 8px;
  background: rgb(2,0,36);
  background: linear-gradient(90deg, #294A9B 0%,rgba(28, 136, 248, 1) 35%, rgba(100, 136, 248, 1) 100%);
    border-radius: 0px 40px 0px 30px;
  font-family: 'Nunito Sans';
  font-weight: 700;
  font-size: calc(99.98% + 10px);
  line-height: 44px;
  text-align: center;
  border: none;
  cursor: pointer;
  position: relative;
    margin-top:10px;
  color: #FFFFFF;
  margin-left: 10px;

    :hover{
      background: linear-gradient(rgba(28, 136, 248, 1), rgba(55, 109, 168, 1));
    }
  }

  .btntitle{
    display:inline;
    font-size: 16px;

  }

  .main{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 16rem;
    width:100%;
  }
  .title{
    background-color: red;
    font-size: 26px;
  /* Create the gradient. */
  background-image: linear-gradient(45deg, #4EA5E1, #2A4B9C);
    font-weight: 600;
  /* Set the background size and repeat properties. */
  background-size: 100%;
  background-repeat: repeat;
    font-family: 'Poppins';
    margin-top: -80px;
    margin-left: 50px;
  /* Use the text as a mask for the background. */
  /* This will show the gradient as a text color rather than element bg. */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
  text-align: center;
  margin-top:-120px;
  }


  .lomotif{
    position: fixed;
  }

`;
