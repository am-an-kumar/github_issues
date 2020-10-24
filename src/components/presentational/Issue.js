import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { IssueLabelsList } from 'components'

const Issue = memo(function Issue({ issue }) {
    const {
        id,
        title,
        user: { login, avatar_url: avatarURL },
        labels,
        state,
        comments: commentCount,
        created_at: createdAt,
    } = issue

    return (
        <li>
            <span>{title}</span>
            <span>{`${login}: ${avatarURL}`}</span>
            <IssueLabelsList labels={labels} />
            <span>{state}</span>
            <span>{`${commentCount} comments`}</span>
            <span>{`Created at: ${createdAt}`}</span>
        </li>
    )
})

Issue.propTypes = {
    issue: PropTypes.object,
}

export { Issue }
