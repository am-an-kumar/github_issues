import { apiInstance } from 'api'

function fetchRepoDetailsAPI(owner, repo) {
    return apiInstance.get(`repos/${owner}/${repo}`)
}

export { fetchRepoDetailsAPI }
