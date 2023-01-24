import React from 'react'
import ReactDOM from 'react-dom'
import Tokyo from './Tokyo'
import Hokkaido from './Hokkaido'
import Saitama from './Saitama'
import Osaka from './Osaka'
import Kyoto from './Kyoto'
import Yokohama from './Yokohama'
import Phrases from './Phrases'

ReactDOM.render(<Tokyo />, document.getElementById("tokyo-info"))
ReactDOM.render(<Hokkaido />, document.getElementById("hokkaido-info"))
ReactDOM.render(<Saitama />, document.getElementById("saitama-info"))
ReactDOM.render(<Osaka />, document.getElementById("osaka-info"))
ReactDOM.render(<Kyoto />, document.getElementById("kyoto-info"))
ReactDOM.render(<Yokohama />, document.getElementById("yokohama-info"))
ReactDOM.render(<Phrases />, document.getElementById("important-phrases"))