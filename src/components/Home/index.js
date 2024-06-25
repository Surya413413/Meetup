import {Link} from 'react-router-dom'

import ShareContext from '../../context/ShareContext'

import {
  HomeContaine,
  HomeHeadin,
  HomePar,
  Button,
  Image,
  Names,
  Topics,
  NavContainer,
  Websitelogo,
} from './styledComponent'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

const Home = props => {
  const onRegister = () => {
    const {history} = props
    history.replace('/register')
  }

  return (
    <ShareContext.Consumer>
      {value => {
        const {isRegistered, userName, topics} = value

        const displayText = topics
          ? (topicsList.find(each => each.id === topics) || {}).displayText
          : ''

        return (
          <div>
            <NavContainer>
              <Websitelogo
                src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
                alt="website logo"
              />
            </NavContainer>

            {isRegistered === true ? (
              <HomeContaine>
                <Names>Hello {userName}</Names>
                <Topics>Welcome to {displayText}</Topics>
                <Image
                  src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                  alt="meetup"
                />
              </HomeContaine>
            ) : (
              <HomeContaine>
                <HomeHeadin>Welcome to Meetup</HomeHeadin>
                <HomePar>Please register for the topic</HomePar>
                <Link to="/register">
                  <Button onClick={onRegister}>Register</Button>
                </Link>

                <Image
                  src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                  alt="meetup"
                />
              </HomeContaine>
            )}
          </div>
        )
      }}
    </ShareContext.Consumer>
  )
}

export default Home
