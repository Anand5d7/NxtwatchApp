import styled from 'styled-components'

export const AppHomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 768px) {
    width: 100vw;
    min-height: 100vh;
    margin-right: 120px;
  }
`
export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${props => props.bgColor};
  width: 30vw;
  padding: 0px;
  margin: 0px;
  @media screen and (min-width: 768px) {
    width: 85vw;
    margin-left: 200px;
  }
`
export const BannerContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  width: 100%;
  height: 350px;
  padding-top: 40px;
  padding-left: 60px;
  padding-right: 20px;
  margin: 0px;
  padding-bottom: 0px;
  display: ${props => props.display};
  justify-content: space-between;
  align-items: center;
`
export const BannerLeftPart = styled.div`
  width: 50%;
`
export const BannerImage = styled.img`
  height: 30px;
  width: 120px;
`
export const BannerText = styled.p`
  color: #000000;
  font-family: 'Roboto';
  font-size: 16px;
  line-height: 1.5;
  font-weight: 500;
`

export const BannerButton = styled.button`
  background-color: transparent;
  border: 1px solid #000000;
  color: #000000;
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 600;
  height: 30px;
  width: 100px;
  margin-top: 10px;
`
export const BannerRightPart = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  margin: 0px;
  padding: 0px;
`

export const BannerCloseButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`
export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 30px;
  width: 60%;
  border: none;
  outline: none;
  margin-left: 60px;
  margin-right: 20px;
  margin-top: 20px;
`
export const SearchInput = styled.input`
  background-color: #ffffff;
  height: 30px;
  width: 80%;
  padding-left: 10px;
  border: 1px solid #d7dfe9;
  color: #1e293b;
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 600;
`
export const SearchIconContainer = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #909090;
  width: 70px;
  height: 30px;
  cursor: pointer;
  border: none;
`
export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
`
