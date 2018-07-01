import React from 'react'
import ReactDOM from 'react-dom'
import moment from 'moment'
import 'moment/locale/pt-br'

import App from './components/base/App'
import registerServiceWorker from './registerServiceWorker'
import './index.css'

moment.locale('pt-BR')

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
