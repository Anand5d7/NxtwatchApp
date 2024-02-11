import styled from 'styled-components'

import {Link} from 'react-router-dom'

export const VideocardLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.textColor};
`

export const VideocardListItem = styled.li`
  width: 100%;
  background-color: ${props => props.bgColor};
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    padding-left: 50px;
  }
`
export const VideocardThumbNailImage = styled.img`
  width: 100%;
  margin-bottom: 10px;
  margin-top: 100px;
  @media screen and (min-width: 768px) {
    width: 500px;
    height: 300px;
  }
`
export const VideocardVideoDetails = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
  }
`
export const VideocardProfileImage = styled.img`
  height: 50px;
  width: 60px;
  margin-right: 10px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const VideocardContentSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 8px;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    padding-top: 0px;
  }
`
export const VideocardViewsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0px;
`
export const VideocardTitle = styled.p`
  color: ${props => props.textColor};
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  margin: 0px;
`
export const VideocardChannelName = styled.p`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 600;
`
export const VideocardViewAndDate = styled.p`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 600;
`
export const VideocardDot = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  padding-left: 5px;
  padding-right: 5px;
`
