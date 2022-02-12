import styled from 'styled-components'

export const LoginPageStyle = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #584D3D;
  

  background-image: linear-gradient(
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0.5)),
    url('/pexels-alesia-kozik-8154260.jpg');
  background-repeat: no-repeat;
  background-position: center;

  h2 + h2,
  h3 {
    margin: 5px;
  }
`
export const LoginContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 500px;
  height: 550px;
  border-radius: 10%;

  background-color: #584D3D;
  color: #FFFFFF;

  input {
    border-radius: 5px;
    margin-top: 10px;
    width: 80%;
  }

  label {
    margin-top: 10px;
  }

  hr {
    border-top: 1px solid white;
    width: 80%;
  }
`
