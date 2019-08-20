const makeNum = (lat, lng) => ({ lat: Number(lat), lng: Number(lng) })

const makeNums = arr => arr.map(element => {
  const { lat, lng } = element.attributes
  return makeNum(lat, lng)
})


export default makeNums
