import React, { useState } from 'react'
import PropTypes from 'prop-types'

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
            <div>
                <span>{avatarURL}</span>
                <span>{fullName}</span>
                <div>
                    <button
                        style={{
                            backgroundColor: watch ? 'green' : 'grey',
                        }}
                        onClick={handleStatusChange}
                        data-id={'watch'}
                    >{`Watch ${watch ? watchCount + 1 : watchCount}`}</button>
                    <button
                        style={{
                            backgroundColor: star ? 'green' : 'grey',
                        }}
                        onClick={handleStatusChange}
                        data-id={'star'}
                    >{`Star ${star ? starCount + 1 : starCount}`}</button>
                    <button
                        style={{
                            backgroundColor: fork ? 'green' : 'grey',
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
