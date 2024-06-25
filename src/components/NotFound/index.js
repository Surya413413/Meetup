import {NotfoundContainer, Notfound} from './styledComponent'

const NotFound = () => (
  <NotfoundContainer>
    <Notfound
      src="https://assets.ccbp.in/frontend/react-js/meetup/not-found-img.png"
      alt="not found"
    />
    <h1>Page not Found</h1>
    <p>We are sorry, the page you requested could not be found.</p>
  </NotfoundContainer>
)

export default NotFound
