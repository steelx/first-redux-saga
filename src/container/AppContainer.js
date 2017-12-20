import { connect } from 'react-redux'
import App from '../components/App'
import { fetchStarwarsRequest } from '../actions'

const mapStateToProps = ({starWars}) => ({starWars})

const bindActionsToDispatch = dispatch => (
    {
        fetchStarwarsRequest: () => dispatch(fetchStarwarsRequest()) 
    }
)

const AppContainer = connect(mapStateToProps, bindActionsToDispatch)(App)

export default AppContainer;