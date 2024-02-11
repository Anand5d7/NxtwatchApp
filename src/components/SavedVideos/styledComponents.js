import styled from 'styled-components'

export const AppSavedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const SavedContainer = styled.div`
  background-color: ${props => props.bgColor};
  min-height: 100vh;
  margin-top: 73px;
  margin-bottom: 60px;
  width: 30vw;
  overflow-y: auto;
  @media screen and (min-width: 768px) {
    width: 86vw;
    margin-left: 290px;
  }
`

export const SavedVideoTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 10vh;
  margin-bottom: 20px;
  position: fixed;
  margin-bottom: 100px;
  width: 30vw;
  @media screen and (min-width: 768px) {
    padding-left: 40px;
    padding-top: 20px;
    padding-right: 20px;
  }
`
export const SavedTitleIconsContainer = styled.div`
  width: 50px;
  height: 50px;
  background-color: #cbd5e1;
  margin-left: 10px;
  margin-right: 10px;
  border-radius: 60px;
  padding: 7px;
`
export const SavedText = styled.h1`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 25px;
`
export const SavedVideoList = styled.ul`
  display: flex;
  list-style-type: none;
  flex-direction: column;
  list-style-type: none;
  padding: 0px;
  margin: 0px;
  padding: 20px;
  @media screen and (min-width: 768px) {
    margin-top: 100px;
    padding-left: 60px;
  }
`
export const NoSavedVideosView = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const NoSavedVideosImage = styled.img`
  width: 300px;
  height: 250px;
  margin-bottom: 30px;
  margin-top: 100px;
`
export const NoSavedVideosHeading = styled.h1`
  color: ${props => props.headingColor};
  font-family: 'Roboto';
  font-size: 25px;
  font-weight: 600;
  margin: 0px;
  margin-bottom: 20px;
`
export const NoSavedVideosNote = styled.p`
  color: ${props => props.noteColor};
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 500;
  margin: 0px;
`
