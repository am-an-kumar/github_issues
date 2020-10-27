import { SET_REPO_ISSUES, SET_ERROR } from 'store/action'

// sync action creators
function setRepoIssues(issues) {
    return {
        type: SET_REPO_ISSUES,
        payload: {
            issues,
        },
    }
}

function setError(error) {
    return {
        type: SET_ERROR,
        payload: {
            error,
        },
    }
}

export { setRepoIssues, setError }
