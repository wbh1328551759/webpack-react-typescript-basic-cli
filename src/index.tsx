/** @format */

import React from 'react'
import ReactDOM from 'react-dom'
import Apps from './Apps'
import './css/output.css'

const rootId = 'root'
const rootElement = document.getElementById(rootId)

if (!rootElement) {
  throw new Error(`Unable to find element with id '${rootId}'`)
}

ReactDOM.render(<Apps />, rootElement)
