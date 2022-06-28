import styled from "styled-components";

export const CpfView = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 90vh;

  .image{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1080px;
    height: 1920px;
    background-size: cover;
  }

  .logo{
    width: 600px;
    height: 100px;
  }

  .btn{
    position: relative;
    width: 100%;
    height: 60px;
    border: none;
    border-radius: 5px 20px 5px;
    background-color: #294A9B;
    color: white;
    font-size: 18px;
    font-weight: 800;
    margin-top: 30px;
    background: linear-gradient(rgba(55, 109, 168, 1), rgba(28, 136, 248, 1));
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
    position: relative;
    font-size: 30px;
    color: rgba(55, 109, 168, 1);
    text-align: center;
    margin-top: -100px;
    font-weight: 900;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }
`;
