export const makeNum = ({ lat, lng }) => ({ lat: Number(lat), lng: Number(lng) })

export const makeNums = arr => arr.map(({ attributes }) => makeNum(attributes))
