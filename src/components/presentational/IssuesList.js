import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { Issue } from 'components'

const IssuesList = memo(function IssuesList({ issues }) {
    return issues ? (
        <ul>
            {issues.map(function mapIssues(issue) {
                return <Issue key={issue.id} issue={issue} />
            })}
        </ul>
    ) : (
        <p>Enter a valid owner/organization and repo and press "Find Issues"</p>
    )
})

IssuesList.propTypes = {
    issues: PropTypes.array,
}

export { IssuesList }
