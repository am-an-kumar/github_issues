import React, { memo } from 'react'
import PropTypes from 'prop-types'
import classes from './IssueLabel.module.scss'

const IssueLabel = memo(function IssueLabel({ name, color }) {
    return (
        <span
            style={{
                backgroundColor: `#${color}`,
            }}
            className={classes.label}
        >
            {name}
        </span>
    )
})

IssueLabel.propTypes = {
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
}

export { IssueLabel }
