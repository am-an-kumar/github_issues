import { apiInstance } from 'api'

function fetchRepoIssuesAPI(owner, repo) {
    return apiInstance.get(`repos/${owner}/${repo}/issues`)
}

export { fetchRepoIssuesAPI }
