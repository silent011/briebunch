import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import App from './components/App'

import store from './redux/store'

const rootNode = document.getElementById('root')
ReactDOM.render(<Provider store={store}>
    <App/>
</Provider>, rootNode)