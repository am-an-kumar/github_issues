import { SET_REPO_ISSUES } from 'store/action'

function issues(state = null, action) {
    switch (action.type) {
        case SET_REPO_ISSUES:
            return action.payload
        default:
            return state
    }
}

export default issues
