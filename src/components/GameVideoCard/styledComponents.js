import styled from 'styled-components'

import {Link} from 'react-router-dom'

export const ItemLink = styled(Link)`
  text-decoration: none;
`
export const GamingListItem = styled.li`
  background-color: none;
  list-style-type: none;
  margin-right: 20px;
  width: 70%;
  margin-bottom: 50px;
`
export const GamingThumbnailImage = styled.img`
  width: 150px;
  height: 200px;
  align-self: center;
  @media screen and (min-width: 768px) {
    width: 250px;
    height: 350px;
  }
`
export const GamingContentSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  @media screen and (min-width: 768px) {
    margin-top: 20px;
  }
`
export const GamingTitle = styled.p`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 600;
  margin: 0px;
  padding-bottom: 7px;
`
export const GamingViewsAndDate = styled.p`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 600;
  line-height: 1;
  margin: 0px;
`
