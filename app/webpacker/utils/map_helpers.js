const makeNum = arr => arr.map(element => ({
  lat: Number(element.attributes.lat),
  lng: Number(element.attributes.lng),
}))

export default makeNum
