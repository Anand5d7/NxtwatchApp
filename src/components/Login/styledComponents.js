import styled from 'styled-components'

export const AppLoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: black;
`
export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 30vw;
  @media screen and (min-width: 768px) {
    width: 60vw;
    background-color: #fff;
  }
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  padding: 30px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  height: 420px;
  width: 350px;
`
export const LoginLogo = styled.img`
  height: 30px;
  width: 120px;
  align-self: center;
  margin-bottom: 25px;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
export const LoginButton = styled.button`
  height: 40px;
  width: 100%;
  background-color: #3b82f6;
  color: #ffffff;
  font-size: 15px;
  font-weight: 600;
  font-family: 'Roboto';
  border-radius: 8px;
  border: none;
  cursor: pointer;
`
export const SubmitError = styled.p`
  color: #ff0000;
  font-size: 12px;
  font-weight: 600;
  font-family: 'Roboto';
`
export const InputLabel = styled.label`
  color: #475569;
  font-size: 14px;
  font-weight: 600;
  font-family: 'Roboto';
  margin-top: 23px;
`

export const UserInput = styled.input`
  height: 35px;
  width: 100%;
  background-color: transparent;
  color: #475569;
  font-size: 15px;
  font-weight: 600;
  font-family: 'Roboto';
  border: 1px solid #cbd5e1;
  outline: none;
  margin-top: 10px;
  padding-left: 10px;
  border-radius: 5px;
`

export const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 20px;
`
export const Checkbox = styled.input`
  height: 15px;
  width: 15px;
`
export const ShowPassword = styled.label`
  color: #1e293b;
  font-size: 15px;
  font-weight: 600;
  font-family: 'Roboto';
`
