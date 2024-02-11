import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import {
  ItemLink,
  ListItem,
  ThumbNailImage,
  VideoDetails,
  ProfileImage,
  ContentSection,
  Title,
  ChannelName,
  ViewAndDate,
  ViewsContainer,
  Dot,
} from './styledComponents'

const HomeVideoCard = props => {
  const {video} = props

  const {
    id,
    title,
    thumbnailUrl,
    viewCount,
    publishedAt,
    name,
    profileImageUrl,
  } = video

  return (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const textColor = isDarkTheme ? '#f9f9f9' : '#475569;'

        return (
          <ItemLink to={`/videos/${id}`}>
            <ListItem>
              <ThumbNailImage src={thumbnailUrl} alt="video thumbnail" />
              <VideoDetails>
                <ProfileImage src={profileImageUrl} alt="channel logo" />
                <ContentSection>
                  <Title color={textColor}>{title}</Title>
                  <ViewsContainer>
                    <ChannelName color={textColor}>{name}</ChannelName>
                    <ViewAndDate color={textColor}>
                      {viewCount} views<Dot> &#8226;</Dot> {publishedAt}
                    </ViewAndDate>
                  </ViewsContainer>
                </ContentSection>
              </VideoDetails>
            </ListItem>
          </ItemLink>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )
}

export default HomeVideoCard
