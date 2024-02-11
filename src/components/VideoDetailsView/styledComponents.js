import styled from 'styled-components'

export const VideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const VideoDetailsViewContainer = styled.div`
  background-color: ${props => props.bgColor};
  height: 100vh;
  margin-top: 60px;
  width: 30vw;
  margin-bottom: 60px;
  padding: 0px;
  margin: 0px;
`

export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
`
