import React from 'react'
import { Provider } from 'react-redux'
import LoadingBar from 'react-redux-loading'
import { Header, Main } from 'components'
import store from 'store'

function App() {
    return (
        <Provider store={store}>
            <LoadingBar />
            <Header />
            <Main />
        </Provider>
    )
}

export default App
