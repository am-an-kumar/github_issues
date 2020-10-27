import { SET_REPO_ISSUES, SET_ERROR } from 'store/action'

const initialState = {
    issues: [],
    hasMoreIssues: true,
    error: false,
}

function issues(state = initialState, { type, payload }) {
    switch (type) {
        case SET_REPO_ISSUES:
            const { issues } = payload
            if (issues.length === 0) {
                return {
                    ...state,
                    issues,
                    hasMoreIssues: false,
                    error: false,
                }
            } else {
                return {
                    ...state,
                    issues,
                    error: false,
                }
            }

        case SET_ERROR:
            return {
                ...state,
                error: payload.error,
            }

        default:
            return state
    }
}

export default issues
