import { combineReducers } from 'redux'
import { loadingBarReducer } from 'react-redux-loading'
import repo from './repo'
import issues from './issues'

export default combineReducers({
    repo,
    issues,
    loadingBar: loadingBarReducer,
})
