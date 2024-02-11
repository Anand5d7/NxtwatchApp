import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const NavbarContainer = styled.nav`
  display: flex;
  flex-direction: row;
  top: 0;
  justify-content: space-between;
  align-items: center;
  height: 10vh;
  width: 30vw;
  padding-left: 15px;
  padding-right: 15px;
  position: fixed;
  background-color: ${props => props.bgColor};
  @media screen and (min-width: 768px) {
    width: 100vw;
  }
`
export const LogoLink = styled(Link)`
  text-decoration: none;
`
export const ImageHeader = styled.img`
  width: 120px;
  height: 30px;
`

export const ActionsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`
export const ThemeButton = styled.button`
  border: none;
  outline: none;
  margin-right: 10px;
  cursor: pointer;
  background-color: transparent;
`
export const ProfileImage = styled.img`
  height: 30px;
  width: 30px;
  @media screen and (min-width: 767px) {
    display: none;
  }
  @media screen and (min-width: 768px) {
    display: flex;
  }
`
export const LogoutButton = styled.button`
  border: 1px solid;
  font-family: 'Roboto';
  font-size: 20px;
  border-radius: 5px;
  background-color: ${props => props.bgColor};
  color: ${props => props.color};
  border-color: ${props => props.color};
  @media screen and (min-width: 767px) {
    display: none;
  }
  @media screen and (min-width: 768px) {
    display: flex;
    margin-left: 20px;
    cursor: pointer;
    margin-right: 20px;
  }
`
export const LogoutIconButton = styled.button`
  background-color: transparent;
  display: flex;
  border: none;
  outline: none;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 5px;
  padding: 20px;
  height: 180px;
  width: 350px;
`
export const ModalDesc = styled.p`
  color: #00306e;
  font-family: 'Roboto';
  text-align: center;
  font-size: 18px;
  font-weight: 600;
`
export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`
export const CancelButton = styled.button`
  background-color: transparent;
  border: 1px solid grey;
  color: grey;
  height: 40px;
  width: 80px;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 600;
  outline: none;
  margin-right: 40px;
  cursor: pointer;
  border-radius: 3px;
`

export const ConfirmButton = styled.button`
  background-color: #3b82f6;
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 16px;
  height: 40px;
  width: 80px;
  font-weight: 600;
  border: 1px solid #3b82f6;
  outline: none;
  cursor: pointer;
  border-radius: 3px;
`
