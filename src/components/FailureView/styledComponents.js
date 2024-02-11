import styled from 'styled-components'

export const FailedView = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: none;
`
export const FailedImage = styled.img`
  height: 300px;
  width: 300px;
`
export const FailedHeading = styled.h1`
  color: ${props => props.headingColor};
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 600;
  text-align: center;
`
export const FailedNote = styled.p`
  color: ${props => props.noteColor};
  font-family: 'Roboto';
  font-size: 17px;
  font-weight: 600;
  text-align: center;
`
export const RetryButton = styled.button`
  background-color: #4f46e5;
  border: none;
  outline: none;
  border-radius: 4px;
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 600;
`
