import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'

import {BsMoon, BsBrightnessHigh} from 'react-icons/bs'
import {FiLogOut} from 'react-icons/fi'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import {
  NavbarContainer,
  LogoLink,
  ImageHeader,
  ActionsContainer,
  ThemeButton,
  ProfileImage,
  LogoutButton,
  ModalContainer,
  ModalDesc,
  ButtonContainer,
  CancelButton,
  ConfirmButton,
  LogoutIconButton,
} from './styledComponents'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkTheme, onChangeTheme} = value
        const color = isDarkTheme ? '#ffffff' : '#00306e'
        const bgColor = isDarkTheme ? '#231f20' : '#f1f5f9'

        const onClickTheme = () => {
          onChangeTheme()
        }

        const websiteLogo = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

        return (
          <NavbarContainer bgColor={bgColor}>
            <LogoLink to="/">
              <ImageHeader src={websiteLogo} alt="website logo" />
            </LogoLink>
            <ActionsContainer>
              <ThemeButton
                type="button"
                data-testid="theme"
                onClick={onClickTheme}
              >
                {isDarkTheme ? (
                  <BsBrightnessHigh color="#ffffff" size={25} />
                ) : (
                  <BsMoon size={25} />
                )}
              </ThemeButton>
              <ProfileImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
              />
              <Popup
                modal
                trigger={
                  <LogoutButton type="button" bgColor={bgColor} color={color}>
                    Logout
                  </LogoutButton>
                }
              >
                {close => (
                  <ModalContainer>
                    <ModalDesc>Are you sure, you want to logout?</ModalDesc>
                    <ButtonContainer>
                      <CancelButton
                        type="button"
                        data-testid="closeButton"
                        onClick={() => close()}
                      >
                        Cancel
                      </CancelButton>
                      <ConfirmButton type="button" onClick={onClickLogout}>
                        Confirm
                      </ConfirmButton>
                    </ButtonContainer>
                  </ModalContainer>
                )}
              </Popup>
              <Popup
                modal
                trigger={
                  <LogoutIconButton type="button">
                    <FiLogOut size={25} color={color} />
                  </LogoutIconButton>
                }
                className="popup-content"
              >
                {close => (
                  <ModalContainer>
                    <ModalDesc>Are you sure, you want to logout?</ModalDesc>
                    <ButtonContainer>
                      <CancelButton
                        type="button"
                        data-testid="closeButton"
                        onClick={() => close()}
                      >
                        Cancel
                      </CancelButton>
                      <ConfirmButton type="button" onClick={onClickLogout}>
                        Confirm
                      </ConfirmButton>
                    </ButtonContainer>
                  </ModalContainer>
                )}
              </Popup>
            </ActionsContainer>
          </NavbarContainer>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )
}

export default withRouter(Header)
