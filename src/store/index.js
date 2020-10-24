import { createStore, compose } from 'redux'
import middleware from 'store/middleware'
import reducer from 'store/reducer'

const store = createStore(
    reducer,
    {},
    compose(
        middleware,
        window.__REDUX_DEVTOOLS_EXTENSION__
            ? window.__REDUX_DEVTOOLS_EXTENSION__()
            : (f) => f,
    ),
)

export default store
