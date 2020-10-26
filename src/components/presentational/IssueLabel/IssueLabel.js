import React, { memo } from 'react'
import PropTypes from 'prop-types'

const IssueLabel = memo(function IssueLabel({ name, color }) {
    return (
        <span
            style={{
                backgroundColor: `#${color}`,
            }}
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
