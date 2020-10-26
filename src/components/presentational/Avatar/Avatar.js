import React from 'react'
import PropTypes from 'prop-types'
import classes from './Avatar.module.scss'

function Avatar({ url, alt }) {
    return <img src={url} alt={alt} className={classes.avatar} />
}

Avatar.propTypes = {
    url: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
}

export { Avatar }
