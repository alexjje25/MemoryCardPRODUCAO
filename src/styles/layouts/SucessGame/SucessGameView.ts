import styled from "styled-components";

export const SucessGameView = styled.main`
  width:100%;

  .image{
    width:1080px;
    height:1920px;
    background-size: cover;
  }
  .logo{
    width:809px;
    height: 100px;
  }
  .btn{
    position: relative;
    width: 60%;
    height: 60px;
    border: none;
    border-radius: 5px 20px 5px;
    background-color: #294A9B;
    color: white;
    margin-top: 10px;
  }
  .main{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 13rem;
  }
  .title{
    position:relative;
  }
  .subTitle{
    position:relative;
    margin-top: -10px;
  }
`;
