import { SET_REPO_ISSUES } from 'store/action'

// sync action creators
function setRepoIssues(issues) {
    return {
        type: SET_REPO_ISSUES,
        payload: issues,
    }
}

export { setRepoIssues }
