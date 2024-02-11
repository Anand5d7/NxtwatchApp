import styled from 'styled-components'

export const VideoPlayer = styled.div``

export const PlayVideoTitle = styled.p`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 600;
  padding-left: 15px;
`
export const PlayVideoStatusContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const PlayVideoStatus = styled.p`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 600;
  padding-left: 15px;
`
export const PlayVideoDot = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  padding-left: 5px;
  padding-right: 7px;
`
export const PlaySocialButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  padding-left: 15px;
`
export const SocialButton = styled.button`
  border: none;
  background-color: transparent;
  outline: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 10px;
  color: ${props => props.color};
`
export const ButtonText = styled.span`
  margin-left: 5px;
  color: #2563eb;
`
export const HrLine = styled.hr`
  border: 1px solid #909090;
  margin-left: 15px;
  margin-right: 15px;
`

export const ChannelContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 15px;
  padding-right: 15px;
  margin: 0px;
`
export const ChannelImage = styled.img`
  height: 60px;
  width: 60px;
  margin: 0px;
  padding: 0px;
  margin-top: 0px;
  margin-right: 20px;
`
export const ChannelInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
`
export const ChannelContainerDesc = styled.div`
  display: flex;
  flex-direction: column;
`
export const ChannelName = styled.p`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 15px;
  padding-bottom: 10px;
  margin: 0px;
  font-weight: 600;
`
export const ChannelSubscribers = styled.p`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 12px;
  padding-bottom: 20px;
  margin: 0px;
  font-weight: 600;
`
export const ChannelDescription = styled.p`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 15px;
  align-self: flex-start;
  margin: 0px;
  font-weight: 600;
`

export const BtnContainer = styled.div`
  display: flex;
  background: none;
`
