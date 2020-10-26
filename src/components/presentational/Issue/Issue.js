import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { GoComment, GoIssueOpened, GoIssueClosed } from 'react-icons/go'
import { IssueLabelsList } from 'components'
import classes from './Issue.module.scss'

const Issue = memo(function Issue({ issue }) {
    const {
        number,
        title,
        user: { login },
        labels,
        state,
        comments: commentCount,
        created_at: createdAt,
    } = issue

    return (
        <li className={classes.issue}>
            <span className={classes.state}>
                {state === 'open' ? (
                    <GoIssueOpened color="#2c974b" />
                ) : (
                    <GoIssueClosed color="red" />
                )}
            </span>
            <div className={classes.info}>
                <div className={classes.issueInfo}>
                    <span className={classes.title}>{title}</span>
                    <IssueLabelsList labels={labels} />
                </div>
                <span
                    className={classes.metaInfo}
                >{`#${number} opened by ${login} at ${createdAt}`}</span>
            </div>
            {commentCount ? (
                <span className={classes.comment}>
                    <GoComment />
                    <span>{commentCount}</span>
                </span>
            ) : null}
        </li>
    )
})

Issue.propTypes = {
    issue: PropTypes.object,
}

export { Issue }
