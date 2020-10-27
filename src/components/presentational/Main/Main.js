import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchRepoData } from 'store/actionCreator'
import { RepoForm, RepoInfo, IssuesList } from 'components'
import classes from './Main.module.scss'

const MainComponent = memo(function MainComponent({
    fetchRepoData,
    repo,
    issues,
    error,
}) {
    return (
        <main className={classes.main}>
            <RepoForm fetchRepoData={fetchRepoData} />
            {!error && <RepoInfo repo={repo} />}
            <IssuesList issues={issues} error={error} />
        </main>
    )
})

const mapStateToProps = ({ repo, issues }) => ({
    repo,
    issues: issues.issues,
    error: issues.error,
})

const mapDispatchToProps = { fetchRepoData }

const Main = connect(mapStateToProps, mapDispatchToProps)(MainComponent)

Main.propTypes = {
    repo: PropTypes.object,
    issues: PropTypes.array,
    fetchRepoData: PropTypes.func,
}

export { Main }
