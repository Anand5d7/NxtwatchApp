import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const ItemLink = styled(Link)`
  text-decoration: none;
`
export const ListItem = styled.li`
  background-color: none;
  width: 100%;
  display: flex;
  text-decoration: none;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    width: 70%;
    height: 400px;
    margin: 10px;
    margin-bottom: 20px;
  }
`
export const ThumbNailImage = styled.img`
  width: 100%;
  margin: 0px;
  padding: 0px;
  margin-top: 20px;
  padding-bottom: 10px;
  @media screen and (min-width: 768px) {
    width: 400px;
    height: 250px;
  }
`
export const VideoDetails = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 50%;
  @media screen and (min-width: 768px) {
    width: 300px;
    height: 100px;
  }
`
export const ProfileImage = styled.img`
  height: 50px;
  width: 50px;
  padding-left: 6px;
`
export const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-decoration: none;
  padding-right: 20px;
  padding-left: 20px;
`
export const Title = styled.p`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 17px;
  line-height: 1.5;
  margin: 0px;
  font-weight: 500;
`

export const ViewsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  line-height: 1.5;
  @media screen and (min-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`
export const ChannelName = styled.p`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 13px;
  margin: 0px;
  line-height: 1.5;
  font-weight: 600;
  padding-bottom: 5px;
`
export const ViewAndDate = styled.p`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 13px;
  margin: 0px;
  line-height: 1.5;
  font-weight: 600;
`
export const Dot = styled.span`
  width: 50px;
  height: 50px;
  padding-left: 5px;
  padding-right: 5px;
`
