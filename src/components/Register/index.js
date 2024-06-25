import ShareContext from '../../context/ShareContext'

import {
  RegisterContaine,
  RegisteImg,
  Form,
  RegisteHeading,
  InputContaine,
  Label,
  Input,
  Select,
  RegisterButton,
  ErroMsg,
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

const Register = props => (
  <ShareContext.Consumer>
    {value => {
      const {
        userName,
        topic,
        changeUser,
        changeTopic,
        errorDisplay,
        registerUser,
        errorUpdate,
      } = value

      const submitRegistration = event => {
        event.preventDefault()

        if (userName !== '' && topic !== '') {
          const {history} = props
          history.replace('/')
          registerUser()
        } else {
          errorUpdate()
        }
      }

      const onChangeUser = event => {
        changeUser(event.target.value)
      }

      const onChangeTopic = event => {
        changeTopic(event.target.value)
      }

      return (
        <div>
          <NavContainer>
            <Websitelogo
              src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
              alt="website logo"
            />
          </NavContainer>
          <div>
            <RegisterContaine>
              <RegisteImg
                src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
                alt="website register"
              />
              <Form onSubmit={submitRegistration}>
                <RegisteHeading>Let us join</RegisteHeading>
                <InputContaine>
                  <Label htmlFor="name">NAME</Label>
                  <Input
                    id="name"
                    value={userName}
                    type="text"
                    onChange={onChangeUser}
                    placeholder="Your name"
                  />
                </InputContaine>
                <InputContaine>
                  <Label htmlFor="topic">Topics</Label>
                  <Select id="topic" value={topic} onChange={onChangeTopic}>
                    {topicsList.map(each => (
                      <option value={each.id} key={each.id}>
                        {each.displayText}
                      </option>
                    ))}
                  </Select>
                </InputContaine>
                <RegisterButton type="submit">Register Now</RegisterButton>
                {errorDisplay === true ? (
                  <ErroMsg>Please enter your name</ErroMsg>
                ) : (
                  ''
                )}
              </Form>
            </RegisterContaine>
          </div>
        </div>
      )
    }}
  </ShareContext.Consumer>
)

export default Register
