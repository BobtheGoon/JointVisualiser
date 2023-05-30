const svgns = 'http://www.w3.org/2000/svg'

const createCanvas = (height, width) => {
  const canvas = document.createElementNS(svgns, 'svg')
  canvas.id = 'canvas'
  canvas.setAttribute('width', width)
  canvas.setAttribute('height', height)
  canvas.setAttribute('viewBox', `0 0 ${width} ${height}`)

  return canvas
}

//Draw plate
const drawPlate = (plateHeight, plateWidth, canvasHeight, canvasWidth) => {    
  const plate = document.createElementNS(svgns, 'rect')
  plate.setAttribute('x', canvasWidth/2 - plateWidth/2)
  plate.setAttribute('y', canvasHeight/2 - plateHeight/2)
  plate.setAttribute('height', plateHeight)
  plate.setAttribute('width', plateWidth)
  plate.setAttribute('fill', '#dddddd')
  
  return plate
}

//Draw profile
const drawProfile = (height, width, thickness, canvasHeight, canvasWidth) => {
  const profile = document.createElementNS(svgns, 'rect')
  
  //Since stroke-width is set inwards, we need to subtract it from height and width so the profile size is displayed correctly
  height -= thickness
  width -= thickness
  
  profile.setAttribute('x', canvasWidth/2 - width/2)
  profile.setAttribute('y', canvasHeight/2 - height/2)
  profile.setAttribute('width', width)
  profile.setAttribute('height', height)
  profile.setAttribute('stroke', 'black')
  profile.setAttribute('fill', 'transparent')
  profile.setAttribute('stroke-width', thickness)
  
  return profile    
}

//Draw bolts
const drawBolts = (e1, e2, p1, p2, boltCount, boltSize, plateHeight, plateWidth, canvasHeight, canvasWidth) => {
  let bolts = []
  
  //Create top bolt row
  for(let i=0 ; i < boltCount; i++) {
    const bolt = document.createElementNS(svgns, 'circle')
    bolt.setAttribute('cx', canvasWidth/2 - plateWidth/2 + e2 + p2*i)
    bolt.setAttribute('cy', canvasHeight/2 - plateHeight/2 + e1)
    bolt.setAttribute('r', boltSize/2)
    bolt.setAttribute('fill', '#000000')
    bolts.push(bolt)
  }
  
  //Create bottom bolt row
  for(let i=0 ; i < boltCount; i++) {
    const bolt = document.createElementNS(svgns, 'circle')
    bolt.setAttribute('cx', canvasWidth/2 - plateWidth/2 + e2 + p2*i)
    bolt.setAttribute('cy', canvasHeight/2 + plateHeight/2 - e1)
    bolt.setAttribute('r', boltSize/2)
    bolt.setAttribute('fill', '#000000')
    bolts.push(bolt)
  }
  
  return bolts
}

export {createCanvas, drawPlate, drawProfile, drawBolts}