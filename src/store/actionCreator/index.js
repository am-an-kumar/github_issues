import { showLoading, hideLoading } from 'react-redux-loading'
import { fetchRepoDetailsAPI, fetchRepoIssuesAPI } from 'api'
import { setRepoDetails, setRepoIssues, setError } from 'store/actionCreator'

function fetchRepoData(owner, repo) {
    return function (dispatch) {
        // showing the loading indicator
        dispatch(showLoading())

        Promise.all([
            fetchRepoDetailsAPI(owner, repo),
            fetchRepoIssuesAPI(owner, repo),
        ])
            .then(function handleResponse([repoData, issuesData]) {
                // formatting payload for repo reducer
                const {
                    full_name,
                    watchers_count,
                    stargazers_count,
                    forks_count,
                    owner: { avatar_url },
                } = repoData.data
                const repoPayload = {
                    fullName: full_name,
                    watchCount: watchers_count,
                    forkCount: forks_count,
                    starCount: stargazers_count,
                    avatarURL: avatar_url,
                }

                dispatch(setRepoDetails(repoPayload))
                dispatch(setRepoIssues(issuesData.data))
            })
            .catch(function handleError() {
                dispatch(setRepoDetails([]))
                dispatch(setRepoIssues([]))
                dispatch(setError(true))
            })
            .finally(function cleanUp() {
                // hiding the loading indicator
                dispatch(hideLoading())
            })
    }
}

export * from './repo'
export * from './issues'
export { fetchRepoData }
