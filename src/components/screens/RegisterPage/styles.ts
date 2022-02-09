import styled from 'styled-components'

export const RegisterStyle = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #584D3D;
  

  background-image: linear-gradient(
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0.5)),
    url('/pexels-august-de-richelieu-8366849.jpg');
  background-repeat: no-repeat;
  background-position: center;
`
export const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 600px;
  height: 600px;
  border-radius: 10%;

  background-color: #584D3D;
  color: #FFFFFF;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;

    input {
      border-radius: 5px;
      margin-left: 10px;
      margin-top: 10px;
      width: 70%;
    }
    
  }
`
