import styled from 'styled-components'

export const AppTrendingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const TrendingContainer = styled.div`
  background-color: ${props => props.bgColor};
  min-height: 100vh;
  width: 30vw;
  margin-top: 73px;
  margin-bottom: 60px;
  @media screen and (min-width: 768px) {
    width: 85vw;
    margin-left: 246px;
  }
`
export const TrendingVideoTitle = styled.div`
  display: flex;
  flex-direction: row;
  height: 10vh;
  align-items: center;
  margin-bottom: 20px;
  position: fixed;
  width: 30vw;
  @media screen and (min-width: 768px) {
    width: 85vw;
    margin-left: 20px;
  }
`
export const TrendingTitleIconContainer = styled.div`
  width: 50px;
  height: 50px;
  background-color: #cbd5e1;
  align-items: center;
  margin-right: 30px;
  margin-left: 30px;
  border-radius: 60px;
  padding: 7px;
`
export const TrendingText = styled.h1`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 25px;
  font-weight: 600;
`

export const TrendingVideoList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  margin: 0px;
  padding: 20px;
`
export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: center;
  align-items: center;
  min-height: 80vh;
`
