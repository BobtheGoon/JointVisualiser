import { clearContent } from "./helper"
import { FormFactory } from "./FormFactory"
import { CanvasFactory} from "./CanvasFactory"

const createForm = () => {
  const form = FormFactory()
  form.createInputs('e1', 'e2', 'p1', 'p2', 'boltSize', 'pHeight', 'pWidth')
  form.createLabels(['e1', 'e2', 'p1', 'p2', 'Bolt', 'Profile Height', 'Profile Width'])

  return form
}

const createCanvas = () => {
  const canvas = CanvasFactory()
  canvas.drawProfile(100, 100, 15)
  canvas.drawBolts(30, 1, 175, 175 )

  return canvas
}

const renderChordEndJoint = () => {
  // clearContent()

  const root = document.createElement('div')
  root.id = 'chord-end-joint'

  const form = createForm()
  const canvas = createCanvas()

  root.append(form.getForm())
  root.append(canvas.getCanvas())
  document.getElementById('content').append(root)
}

export default renderChordEndJoint