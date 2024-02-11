import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import {
  VideocardLink,
  VideocardListItem,
  VideocardThumbNailImage,
  VideocardVideoDetails,
  VideocardProfileImage,
  VideocardContentSection,
  VideocardTitle,
  VideocardChannelName,
  VideocardViewAndDate,
  VideocardDot,
  VideocardViewsContainer,
} from './styledComponents'

const VideoCard = props => {
  const {videoDetails} = props
  const {
    id,
    title,
    thumbnailUrl,
    viewCount,
    publishedAt,
    name,
    profileImageUrl,
  } = videoDetails

  return (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const bgColor = isDarkTheme ? '#181818' : '#f9f9f9'
        const textColor = isDarkTheme ? '#ffffff' : '#181818'
        const color = isDarkTheme ? ' #94a3b8' : '#181818'

        return (
          <VideocardLink to={`/videos/${id}`} textColor={textColor}>
            <VideocardListItem bgColor={bgColor}>
              <VideocardThumbNailImage
                src={thumbnailUrl}
                alt="video thumbnail"
              />
              <VideocardVideoDetails>
                <VideocardProfileImage
                  src={profileImageUrl}
                  alt="channel logo"
                />
                <VideocardContentSection>
                  <VideocardTitle color={color}>{title}</VideocardTitle>
                  <VideocardViewsContainer>
                    <VideocardChannelName color={color}>
                      {name}
                      <VideocardDot> &#8226;</VideocardDot>
                    </VideocardChannelName>
                    <VideocardViewAndDate color={color}>
                      {viewCount} views<VideocardDot> &#8226;</VideocardDot>
                      {publishedAt}
                    </VideocardViewAndDate>
                  </VideocardViewsContainer>
                </VideocardContentSection>
              </VideocardVideoDetails>
            </VideocardListItem>
          </VideocardLink>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )
}

export default VideoCard
