import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchRepoData } from 'store/actionCreator'
import { RepoForm, RepoInfo, IssuesList } from 'components'

const MainComponent = memo(function MainComponent({
    fetchRepoData,
    repo,
    issues,
}) {
    return (
        <main>
            <RepoForm fetchRepoData={fetchRepoData} />
            <RepoInfo repo={repo} />
            <IssuesList issues={issues} />
        </main>
    )
})

const mapStateToProps = ({ repo, issues }) => ({
    repo,
    issues,
})

const mapDispatchToProps = { fetchRepoData }

const Main = connect(mapStateToProps, mapDispatchToProps)(MainComponent)

Main.propTypes = {
    repo: PropTypes.object,
    issues: PropTypes.array,
    fetchRepoData: PropTypes.func,
}

export { Main }
