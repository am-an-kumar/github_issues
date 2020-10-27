import React, { useState } from 'react'
import PropTypes from 'prop-types'
import classes from './RepoForm.module.scss'

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
        <form onSubmit={handleSubmit} className={classes.form}>
            <input
                type="text"
                name="owner"
                placeholder="Organization/Owner"
                value={owner}
                onChange={handleChange}
            />
            <input
                type="text"
                name="repo"
                placeholder="Repository"
                value={repo}
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
