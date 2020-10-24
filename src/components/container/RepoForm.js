import React, { useState } from 'react'
import PropTypes from 'prop-types'

function RepoForm({ fetchRepoData }) {
    const [formState, setFormState] = useState({
        owner: '',
        repo: '',
    })

    function handleSubmit(event) {
        event.preventDefault()
        const { owner, repo } = formState
        fetchRepoData(owner, repo)
    }

    function handleChange(event) {
        const { name, value } = event.target
        setFormState({
            ...formState,
            [name]: value,
        })
    }

    const { owner, repo } = formState

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={owner}
                name="owner"
                onChange={handleChange}
            />
            <input
                type="text"
                value={repo}
                name="repo"
                onChange={handleChange}
            />
            <button type="submit">Find Issues</button>
        </form>
    )
}

RepoForm.propTypes = {
    fetchRepoData: PropTypes.func.isRequired,
}

export { RepoForm }
