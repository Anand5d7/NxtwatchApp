import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import {HiFire} from 'react-icons/hi'

import Header from '../Header'
import NavigationBar from '../NavigationBar'
import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'
import VideoCard from '../VideoCard'
import FailureView from '../FailureView'

import {
  TrendingContainer,
  TrendingTitleIconContainer,
  TrendingVideoTitle,
  TrendingVideoList,
  TrendingText,
  LoaderContainer,
  AppTrendingContainer,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Trending extends Component {
  state = {
    trendingVideos: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const trendingVideosApiUrl = 'https://apis.ccbp.in/videos/trending'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(trendingVideosApiUrl, options)
    if (response.ok) {
      const data = await response.json()
      const updatedData = data.videos.map(eachVideo => ({
        id: eachVideo.id,
        title: eachVideo.title,
        thumbnailUrl: eachVideo.thumbnail_url,
        viewCount: eachVideo.view_count,
        publishedAt: eachVideo.published_at,
        name: eachVideo.channel.name,
        profileImageUrl: eachVideo.channel.profile_image_url,
      }))
      this.setState({
        trendingVideos: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </LoaderContainer>
  )

  renderVideosView = () => {
    const {trendingVideos} = this.state
    return (
      <TrendingVideoList>
        {trendingVideos.map(eachVideo => (
          <VideoCard key={eachVideo.id} videoDetails={eachVideo} />
        ))}
      </TrendingVideoList>
    )
  }

  onRetry = () => {
    this.getTrendingVideos()
  }

  renderFailureView = () => <FailureView onRetry={this.onRetry} />

  renderTrendingVideos = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderVideosView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <ThemeAndVideoContext.Consumer>
        {value => {
          const {isDarkTheme, toggleTheme} = value

          const bgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'
          const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'

          return (
            <AppTrendingContainer data-testid="trending">
              <Header />
              <NavigationBar />
              <TrendingContainer data-testid="trending" onClick={toggleTheme}>
                <TrendingVideoTitle style={{backgroundColor: bgColor}}>
                  <TrendingTitleIconContainer>
                    <HiFire size={35} color="#ff0000" />
                  </TrendingTitleIconContainer>
                  <TrendingText color={textColor}>Trending</TrendingText>
                </TrendingVideoTitle>
                {this.renderTrendingVideos()}
              </TrendingContainer>
            </AppTrendingContainer>
          )
        }}
      </ThemeAndVideoContext.Consumer>
    )
  }
}

export default Trending