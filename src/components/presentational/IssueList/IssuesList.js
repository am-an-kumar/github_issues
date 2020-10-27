import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { Issue } from 'components'
import classes from './IssueList.module.scss'

const IssuesList = memo(function IssuesList({ issues, error }) {
    return error ? (
        <p>Invalid owner/repo pair</p>
    ) : issues.length !== 0 ? (
        <ul className={classes.list}>
            {issues.map(function mapIssues(issue) {
                return <Issue key={issue.id} issue={issue} />
            })}
        </ul>
    ) : (
        <p className={classes.info}>No Issues found</p>
    )
})

IssuesList.propTypes = {
    issues: PropTypes.array,
    error: PropTypes.bool.isRequired,
}

export { IssuesList }
