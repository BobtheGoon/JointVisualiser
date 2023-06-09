import './style.css'

import renderSpliceJoint from "./spliceJoint"
import renderChordEndJoint from "./chordEndJoint"

const renderHome = (() => { 
  const root = document.getElementById('content')

  const menu = document.createElement('div')
  menu.id = 'menu'

  root.append(menu)

  const header = document.createElement('h1')
  header.textContent = 'Joint Visualiser'

  const renderChordEndJointButton = document.createElement('button')
  renderChordEndJointButton.textContent = 'Render chord end joint'
  renderChordEndJointButton.addEventListener('click', renderChordEndJoint)

  const renderSpliceButton = document.createElement('button')
  renderSpliceButton.textContent = 'Render splice joint'
  renderSpliceButton.addEventListener('click', renderSpliceJoint)

  menu.append(header)
  menu.append(renderChordEndJointButton)
  menu.append(renderSpliceButton)
})()