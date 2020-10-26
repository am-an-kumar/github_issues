import React, { useState } from 'react'
import PropTypes from 'prop-types'
import classes from './RepoInfo.module.scss'
import { Avatar } from 'components'

function RepoInfo({ repo }) {
    const [status, setStatus] = useState({
        watch: false,
        star: false,
        fork: false,
    })

    const { watchCount, starCount, forkCount, fullName, avatarURL } = repo || {}

    const { watch, star, fork } = status

    function handleStatusChange(event) {
        const buttonId = event.target.dataset.id
        setStatus({
            ...status,
            [buttonId]: !status[buttonId],
        })
    }

    return (
        repo && (
            <div className={classes.container}>
                <div className={classes.info}>
                    <Avatar url={avatarURL} alt={fullName} />
                    <span>{fullName}</span>
                </div>
                <div className={classes.buttonsContainer}>
                    <button
                        style={{
                            backgroundColor: watch ? '#2c974b' : 'grey',
                        }}
                        onClick={handleStatusChange}
                        data-id={'watch'}
                    >{`Watch ${watch ? watchCount + 1 : watchCount}`}</button>
                    <button
                        style={{
                            backgroundColor: star ? '#2c974b' : 'grey',
                        }}
                        onClick={handleStatusChange}
                        data-id={'star'}
                    >{`Star ${star ? starCount + 1 : starCount}`}</button>
                    <button
                        style={{
                            backgroundColor: fork ? '#2c974b' : 'grey',
                        }}
                        onClick={handleStatusChange}
                        data-id={'fork'}
                    >{`Fork ${fork ? forkCount + 1 : forkCount}`}</button>
                </div>
            </div>
        )
    )
}

RepoInfo.propTypes = {
    repo: PropTypes.object,
}

export { RepoInfo }
