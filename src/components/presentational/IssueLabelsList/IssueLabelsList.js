import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { IssueLabel } from 'components'
import classes from './IssueLabelsList.module.scss'

const IssueLabelsList = memo(function IssueLabelsList({ labels }) {
    return (
        labels && (
            <ul className={classes.list}>
                {labels.map(function mapLabel({ id, name, color }) {
                    return <IssueLabel key={id} name={name} color={color} />
                })}
            </ul>
        )
    )
})

IssueLabelsList.propTypes = {
    labels: PropTypes.array,
}

export { IssueLabelsList }
