import { SET_REPO_DETAILS } from 'store/action'

function repo(state = null, action) {
    switch (action.type) {
        case SET_REPO_DETAILS:
            return action.payload

        default:
            return state
    }
}

export default repo
