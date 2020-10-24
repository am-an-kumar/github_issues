import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { applyMiddleware } from 'redux'

let middleware

if (process.env.NODE_ENV === 'development') {
    middleware = applyMiddleware(thunk, logger)
} else {
    middleware = applyMiddleware(thunk)
}

export default middleware
