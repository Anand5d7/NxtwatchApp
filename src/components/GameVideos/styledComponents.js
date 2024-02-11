import styled from 'styled-components'

export const AppGamingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const GamingContainer = styled.div`
  min-height: 100vh;
  margin-top: 73px;
  margin-bottom: 60px;
  width: 30vw;
  background-color: ${props => props.bgColor};
  @media screen and (min-width: 768px) {
    width: 86vw;
    margin-left: 300px;
  }
`
export const GamingVideoTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 10vh;
  margin-bottom: 20px;
  position: fixed;
  width: 30vw;
  @media screen and (min-width: 768px) {
    width: 86vw;
  }
`
export const GamingTitleIconContainer = styled.div`
  width: 50px;
  height: 50px;
  background-color: #cbd5e1;
  align-items: center;
  margin-right: 30px;
  margin-left: 30px;
  border-radius: 60px;
  padding: 7px;
`
export const GamingText = styled.h1`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 25px;
  font-weight: 600;
`
export const GamingVideoList = styled.ul`
  display: flex;
  flex-direction: row;
  list-style-type: none;
  flex-wrap: wrap;
  margin-top: 80px;
  @media screen and (min-width: 768px) {
    width: 100vw;
  }
`

export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
`
