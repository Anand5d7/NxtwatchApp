import styled from 'styled-components'

export const VideoCardList = styled.ul`
  display: flex;
  flex-direction: row;
  padding: 0px;
  margin: 0px;
  flex-wrap: wrap;
  list-style-type: none;
  @media screen and (min-width: 768px) {
    padding-left: 45px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
`
export const NoVideosImage = styled.img`
  width: 200px;
`
export const NoVideosView = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  background-color: transparent;
`
export const NoVideosHeading = styled.h1`
  color: ${props => props.headingColor};
  font-family: 'Roboto';
  font-size: 24px;
  font-weight: 600;
  padding-top: 20px;
  padding-bottom: 5px;
  margin: 0px;
`
export const NoVideosNote = styled.p`
  color: ${props => props.noteColor};
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 600;
  padding-bottom: 20px;
  margin: 0px;
`
export const RetryButton = styled.button`
  border: none;
  background-color: #4f46e5;
  outline: none;
  height: 30px;
  cursor: pointer;
  width: 70px;
  border-radius: 5px;
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 600;
`
