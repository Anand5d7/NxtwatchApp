import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const NavBar = styled.div`
  display: flex;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-self: flex-start;
  }
`
export const NavigationLgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 92%;
  width: 250px;
  position: fixed;
  padding: 0px;
  margin-left: 0px;
  top: 70px;
  background-color: ${props => props.bgColor};
  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const NavOptions = styled.ul`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  list-style-type: none;
  padding: 0px;
  margin-top: 0px;
`
export const NavLink = styled(Link)`
  text-decoration: none;
`
export const NavLinkContainer = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${props => props.bgColor};
  padding-left: 20px;
`
export const NavText = styled.p`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 600;
  margin-left: 15px;
`
export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
`
export const ContactHeading = styled.p`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 25px;
  font-weight: bold;
`
export const ContactIcons = styled.div`
  display: flex;
  align-items: center;
`
export const ContactImage = styled.img`
  width: 25px;
  height: 25px;
  border-radius: 50px;
  margin-right: 10px;
`
export const ContactNote = styled.p`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 600;
`
export const NavigationSmallContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 30px;
  height: 10vh;
  padding: 10px;
  position: fixed;
  bottom: 0;
  top: 0;
  align-items: center;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
