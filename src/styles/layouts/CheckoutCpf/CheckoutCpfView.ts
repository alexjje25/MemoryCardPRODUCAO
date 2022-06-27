import styled from "styled-components";

export const CheckoutCpfView = styled.main`
  width:100%;

  .image{
    width:1080px;
    height:1920px;
    background-size: cover;
  }
  .logo{
    width:600px;
    height: 100px;

  }
  .btn{
    position: relative;
    width: 58%;
    height: 68px;
    border: none;
    border-radius: 5px 20px 5px;
    background-color: #294A9B;
    color: white;
    font-size: 18px;
    font-weight:800;
    margin-top: 70px;
    background:linear-gradient(rgba(55, 109, 168, 1), rgba(28, 136, 248, 1));
    cursor: pointer;
    :hover{
      background: linear-gradient(rgba(28, 136, 248, 1), rgba(55, 109, 168, 1));
    }
  }
  .main{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 20rem;
  }
  .title{
    position:relative;
    font-size: 26px;
    color: rgba(55, 109, 168, 1);
    text-align: center;
    margin-top:-100px;
    font-weight: 700;
  }
  input{
    background-color: #294A9B;
    position:relative;

  }

  .btn{
  width: 70%;
  height:100%;
  min-height: 4rem;
  border-radius: 8px;
  background: rgb(2,0,36);
  background: linear-gradient(90deg, #294A9B 0%,rgba(28, 136, 248, 1) 35%, rgba(100, 136, 248, 1) 100%);
    border-radius: 0px 40px 0px 30px;
  font-family: 'Nunito Sans';
  font-weight: 600;
  font-size: calc(99.98% + 10px);
  line-height: 44px;
  text-align: center;
  border: none;
  cursor: pointer;
  position: relative;

  color: #FFFFFF;

    :hover{
      background: linear-gradient(rgba(28, 136, 248, 1), rgba(55, 109, 168, 1));
    }
  }


`;
