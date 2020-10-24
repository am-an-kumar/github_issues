import { SET_REPO_DETAILS } from 'store/action'

// sync action creators
function setRepoDetails(repoDetails) {
    return {
        type: SET_REPO_DETAILS,
        payload: repoDetails,
    }
}

export { setRepoDetails }
