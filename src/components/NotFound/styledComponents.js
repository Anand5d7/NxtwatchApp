import styled from 'styled-components'

export const AppNotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.bgColor};
  min-height: 92vh;
  width: 30vw;
  margin-top: 60px;
  padding: 30px;
  margin-bottom: 60px;
  overflow-y: auto;
`
export const NotFoundVideosView = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const NotFoundVideosImage = styled.img`
  width: 200px;
`
export const NotFoundVideosHeading = styled.h1`
  color: ${props => props.headingColor};
  font-family: 'Roboto';
  font-size: 25px;
  font-weight: 600;
  text-align: center;
`
export const NotFoundVideosNote = styled.p`
  color: ${props => props.noteColor};
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 500;
  text-align: center;
`
